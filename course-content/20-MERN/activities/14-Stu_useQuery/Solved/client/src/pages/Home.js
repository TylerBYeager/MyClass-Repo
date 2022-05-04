import React from 'react';
// Import the `useQuery()` hook from Apollo Client
//🔑 To use our query - importing the useQuery Hook and the query into the component where we want the data to be displayed:
import { useQuery } from '@apollo/client';

import ThoughtList from '../components/ThoughtList';

// Import the query we are going to execute from its file
import { QUERY_THOUGHTS } from '../utils/queries';

const Home = () => {
  // Execute the query on component load
  //🔑 We then use the useQuery Hook to execute the query and return a JSON object that contains loading information and the requested data:
  const { loading, data } = useQuery(QUERY_THOUGHTS);

  // Use optional chaining to check if data exists and if it has a thoughts property. If not, return an empty array to use.
  //🔑 If data is returned, we store the returned data in a variable. If no data is available, we use an empty array instead:
  const thoughts = data?.thoughts || [];

  //🔑 We use the variable to access the data in our JSX so the data can be displayed on our page:
  return (
    <main>
      <div className="flex-row justify-center">
        <div className="col-12 col-md-8 mb-3">
          {/* If the data is still loading, render a loading message */}
          {loading ? (
            <div>Loading...</div>
          ) : (
            <ThoughtList
              thoughts={thoughts}
              title="Some Feed for Thought(s)..."
            />
          )}
        </div>
      </div>
    </main>
  );
};

export default Home;

// ☝️ How do we use the useQuery Hook to return data?

// 🙋 The useQuery Hook takes in a GraphQL query wrapped in a gql function and returns the requested data as a JSON object. We can then use that data object to display information on the page.
