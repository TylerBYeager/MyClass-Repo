const randomNum = () => Math.floor(Math.random() * 20);
// 🔑 A reducer is a function that accepts state and an action and returns a new state object. 
// Reducers also keep all of the actions that can be performed on the state object in one place.

// This file consolidates all actions into one function by using a switch statement.
// The switch statement will check the type of action that we passed and perform some work based on that action:

export const reducer = (state, action) => {
  switch (action.type) {
    // The first case for adding a car will create a variable, newCar, that will contain the id and a copy of the action.payload.
    // Then it returns a copy of state with the updated cars array:
    case 'ADD_CAR': {
      const newID = randomNum();
      const newCar = { ...action.payload, id: newID };

      return {
        ...state,
        cars: [...state.cars, newCar],
      };
    }
    // A case for REMOVE_CAR -- which will return a copy of state, including a new cars array, after filtering out the car that we want to remove:
    case 'REMOVE_CAR': {
      return {
        ...state,
        cars: state.cars.filter((car) => car.id !== action.payload),
      };
    }
    // As with all switch statements in JavaScript, we assign a default case, specified in case the action wasn't accounted for in the code:
    default: {
      return state;
    }
  }
};
