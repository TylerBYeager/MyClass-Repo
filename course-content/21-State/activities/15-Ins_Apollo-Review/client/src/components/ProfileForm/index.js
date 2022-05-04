import React, { useState } from 'react';
// Import the `useMutation()` hook from Apollo Client
// First, we import the mutation and the Hook into the ProfileForm component:
import { useMutation } from '@apollo/client';
// Import the GraphQL mutation
import { ADD_PROFILE } from '../../utils/mutations';

const ProfileForm = () => {
  const [name, setName] = useState('');

  // Invoke `useMutation()` hook to return a Promise-based function and data about the ADD_PROFILE mutation
  // The useMutation Hook accepts an argument of a gql mutation.
  // We can expect the useMutation Hook to return a Promise-based mutation function and also an object that contains the status of the mutation
  const [addProfile, { error }] = useMutation(ADD_PROFILE);

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    // Since mutation function is async, wrap in a `try...catch` to catch any network errors from throwing due to a failed request.
    // Now that we have access to the addProfile mutation function, it is time to use it in the component. In this case, because the function is a Promise, we want to execute it inside of a try...catch block.
    // We want the addProfile() function to fire when a user submits the form, so we handle this logic inside the handleFormSubmit() function.
    // TheaddProfile mutation expects a name to be passed to the function. To do this, we pass an object to the addProfile method that includes a variables object. Inside, we will pass name:
    try {
      // Execute mutation and pass in defined parameter data as variables
      const { data } = await addProfile({
        variables: { name },
      });
      // If successful, the page should reload once the request is complete:
      window.location.reload();
    } catch (err) {
      // We add a catch block to log any errors:
      console.error(err);
    }
  };

  return (
    <div>
      <h3>Add yourself to the list...</h3>
      <form
        className="flex-row justify-center justify-space-between-md align-center"
        onSubmit={handleFormSubmit}
      >
        <div className="col-12 col-lg-9">
          <input
            placeholder="Add your profile name..."
            value={name}
            className="form-input w-100"
            onChange={(event) => setName(event.target.value)}
          />
        </div>

        <div className="col-12 col-lg-3">
          <button className="btn btn-info btn-block py-3" type="submit">
            Add Profile
          </button>
        </div>
        {error && (
          <div className="col-12 my-3 bg-danger text-white p-3">
            Something went wrong...
          </div>
        )}
      </form>
    </div>
  );
};

export default ProfileForm;
