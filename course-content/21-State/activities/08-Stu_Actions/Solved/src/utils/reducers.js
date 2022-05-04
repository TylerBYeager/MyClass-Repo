// Import our actions. Actions are in all caps.
import {
  ADD_STUDENT,
  REMOVE_STUDENT,
  UPDATE_STUDENT,
  ADD_MAJOR,
  REMOVE_MAJOR,
} from './actions';

// Reducer accepts state and an action, returns a new state
export default function reducer(state, action) {
  switch (action.type) {
    case ADD_STUDENT: {
      // To calculate the newStudentId, we have to rely on the students array inside the state. We take the last index position in the array and add one to it to generate the new id.
      const newStudentId = state.students[state.students.length - 1].id + 1;

      // Then we create a newStudent object with the content of the action.payload and the newStudentId.
      const newStudent = { ...action.payload, id: newStudentId };

      return {
        ...state,
        // we return a copy of state with an updated students array that now includes the newStudent object:
        students: [...state.students, newStudent],
      };
    }
    case REMOVE_STUDENT: {
      return {
        // The first part of this action is to make a copy of the students array and filter out the id included in action.payload.
        // we can immediately return a copy of state with the updated students array, performing the filter inline:
        ...state,
        students: [...state.students].filter(
          (student) => student.id !== action.payload
        ),
      };
    }
    case UPDATE_STUDENT: {
      // we isolate the index position for the student that we want to update.
      // We can get the index from an array method called findIndex(). This method returns the index position based on a callback passed to the method. In this case, we want to find the index of the student id that matches the id found in action.payload:
      const studentIndex = state.students.findIndex(
        (student) => student.id === action.payload.id
      );

      // Variable to hold our student object
      // we create an object that will contain the updated student. This uses the studentIndex that we found, along with the body of action.payload:
      const updatedStudent = {
        ...state.students[studentIndex],
        ...action.payload,
      };

      // Make a copy of our current students array
      // we create a copy of the students array and inject the updated student into it:
      const newStudentsList = [...state.students];

      // Assign the updated student to their existing position in the newStudentsList
      newStudentsList[studentIndex] = updatedStudent;

      // we return a copy of state with the new students array, which we call newStudentsList:
      return {
        ...state,
        students: newStudentsList,
      };
    }
    case ADD_MAJOR: {
      // we immediately return a copy of state and an updated majors array that contains the major passed into the action.payload object:
      return {
        ...state,
        majors: [...state.majors, action.payload],
      };
    }
    case REMOVE_MAJOR: {
      // instead of returning a copy of the majors array from state and the action.payload, we perform a filter on the array, removing the major provided in action.payload:
      return {
        ...state,
        majors: [...state.majors].filter((major) => major !== action.payload),
      };
    }
    // default case to account for unknown action types.
    default:
      return state;
  }
}
