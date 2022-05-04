import { gql } from '@apollo/client';
// 🔑 Instead of writing the mutation inside the playground, we declare it as a variable inside the mutations.js file, using the gql library from Apollo:
// The mutation starts with the actual word mutation, to tell Apollo that we want to update some data instead of just querying it. Next, we name the mutation addProfile:
// 🔑 Note that the mutation name, addProfile, and variable name, ADD_PROFILE, are the same, helping to prevent confusion within the code.
// We then explicitly tell Apollo that we will expect a name variable that is of type String. All variables in GraphQL queries and mutations are denoted by a dollar sign:
export const ADD_PROFILE = gql`
  mutation addProfile($name: String!) {
    addProfile(name: $name) {
      _id
      name
      skills
    }
  }
`;
