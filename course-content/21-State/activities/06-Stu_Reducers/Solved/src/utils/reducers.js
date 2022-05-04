// NOTE: 🔑 The tests are now passing, this activity only involves setting up the reducer.
// NOTE: The application hasn't implemented the reducer yet and is still using methods inside the StudentContext.

// Import our actions from our actions file
// First we import the action variables from actions.js into the file: A single source of approved actions
// 🔑 It is common practice to set variable names for each kind of action in a new file called actions.js.
import { ADD_STUDENT, REMOVE_STUDENT } from './actions';

// Reducer accepts state and an action, returns a new state
// Then we set up the reducer function, which accepts state and an action:

//The idea is to extract that functionality into a single reducer function. Let's look at those methods to see what we need to include in the reducer function:
export default function reducer(state, action) {
  switch (action.type) {
    // The first action, ADD_STUDENT, returns a new copy of state with an updated students array.
    // We populate the students array with existing students using the spread operator, and we add the new student from the payload property of the action object:
    case ADD_STUDENT:
      return {
        ...state,
        students: [...state.students, action.payload],
      };
    // REMOVE_STUDENT, which also returns a new copy of state with an updated students array.
    case REMOVE_STUDENT:
      return {
        ...state,
        // populate the students array with existing students, as long as they don't have the id that was included in action.payload:
        students: [...state.students].filter(
          (student) => student.id !== action.payload
        ),
      };
    // add a default case, which will prevent the application from breaking if we happen to pass an invalid action to the reducer:
    default:
      return state;
  }
}
