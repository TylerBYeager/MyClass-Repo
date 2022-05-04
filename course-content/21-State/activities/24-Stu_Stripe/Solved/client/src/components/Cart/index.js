import React, { useEffect } from 'react';
import { loadStripe } from '@stripe/stripe-js';
import { useLazyQuery } from '@apollo/client';
import { QUERY_CHECKOUT } from '../../utils/queries';
import { idbPromise } from '../../utils/helpers';
import CartItem from '../CartItem';
import Auth from '../../utils/auth';
import { useStoreContext } from '../../utils/GlobalState';
import { TOGGLE_CART, ADD_MULTIPLE_TO_CART } from '../../utils/actions';
import './style.css';

// stripePromise returns a promise with the stripe object as soon as the Stripe package loads
// We assign the return value of the loadStripe() Promise to a variable called stripePromise:
const stripePromise = loadStripe('pk_test_TYooMQauvdEDq54NiTphI7jx');

const Cart = () => {
  const [state, dispatch] = useStoreContext();
  // We also declare getCheckoutQuery, which is returned with a data object from an Apollo Hook called useLazyQuery. 
  // This method allows us to make a query to the back end for the checkout data:
  const [getCheckout, { data }] = useLazyQuery(QUERY_CHECKOUT);

  // We check to see if there is a data object that exists, if so this means that a checkout session was returned from the backend
  // Then we should redirect to the checkout with a reference to our session id
  // This file also uses React's useEffect Hook in two different places.
  // The first useEffect callback lists data as the only item in the optional dependency array.
  // This means that when data is returned from the getCheckout() query, the code inside this block will run:
  useEffect(() => {
    // In the useEffect callback, we first ask whether a data variable exists. If so, that means that we have received the checkout session data from the back end.
    if (data) {
      stripePromise.then((res) => {
        // we redirect the user to the Stripe checkout page, passing along the session information:
        res.redirectToCheckout({ sessionId: data.checkout.session });
      });
    }
  }, [data]);

  // If the cart's length or if the dispatch function is updated, check to see if the cart is empty.
  // If so, invoke the getCart method and populate the cart with the existing from the session
  // Initially we check whether the cart's length or the dispatch() function has been updated in any way.
  // We are watching these two items for changes by including them in the useEffect optional dependency array.
  useEffect(() => {
    async function getCart() {
      const cart = await idbPromise('cart', 'get');
      dispatch({ type: ADD_MULTIPLE_TO_CART, products: [...cart] });
    }
    // We add a check to determine whether the cart is empty, and if so we call the getCart() method:
    if (!state.cart.length) {
      getCart();
    }
    // Inside the useEffect callback, we declare a scoped helper function called getCart() that is responsible for populating the cart:
  }, [state.cart.length, dispatch]);

  function toggleCart() {
    dispatch({ type: TOGGLE_CART });
  }

  function calculateTotal() {
    let sum = 0;
    state.cart.forEach((item) => {
      sum += item.price * item.purchaseQuantity;
    });
    return sum.toFixed(2);
  }

  // When the submit checkout method is invoked, loop through each item in the cart
  // Add each item id to the productIds array and then invoke the getCheckout query passing an object containing the id for all our products
  // In the Cart component, we also have a method called submitCheckout().
  // This method is responsible for pushing all of the cart items into an array that contains only the id for each product. We assign this new array to the variable productIds:
  function submitCheckout() {
    const productIds = [];

    state.cart.forEach((item) => {
      for (let i = 0; i < item.purchaseQuantity; i++) {
        productIds.push(item._id);
      }
    });
    // After the loop has completed and we have all the productIds in one array, we invoke the getCheckout() query:
    getCheckout({
      variables: { products: productIds },
    });
  }

  if (!state.cartOpen) {
    return (
      <div className="cart-closed" onClick={toggleCart}>
        <span role="img" aria-label="trash">
          🛒
        </span>
      </div>
    );
  }

  return (
    <div className="cart">
      <div className="close" onClick={toggleCart}>
        [close]
      </div>
      <h2>Shopping Cart</h2>
      {state.cart.length ? (
        <div>
          {state.cart.map((item) => (
            <CartItem key={item._id} item={item} />
          ))}

          <div className="flex-row space-between">
            <strong>Total: ${calculateTotal()}</strong>

            {/* Check to see if the user is logged in. If so render a button to check out */}
            {/* We use this submitCheckout() method by attaching it to the onClick attribute of the checkout button. */}
            {Auth.loggedIn() ? (
              <button onClick={submitCheckout}>Checkout</button>
            ) : (
              <span>(log in to check out)</span>
            )}
          </div>
        </div>
      ) : (
        <h3>
          <span role="img" aria-label="shocked">
            😱
          </span>
          You haven't added anything to your cart yet!
        </h3>
      )}
    </div>
  );
};

export default Cart;
