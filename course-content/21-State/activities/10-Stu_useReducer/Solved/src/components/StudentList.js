// We first need to import the useReducer Hook from React to complete this activity.
// We also need to import the action types and the reducer:

// Import useReducer
import React, { useReducer } from 'react';

// Import type variables
import {
  ADD_STUDENT,
  REMOVE_STUDENT,
  SET_STUDENT_NAME,
  SET_STUDENT_MAJOR,
} from '../utils/actions';

// Import reducer from our utils folder
import reducer from '../utils/reducers';

// the custom useStudentContext Hook is being imported from '../utils/StudentContext':
import { useStudentContext } from '../utils/StudentContext';

export default function StudentList() {
  // To use the useReducer Hook, first we have to consider the reducer and initialState objects that need to be passed. The reducer might be easy to remember because it is called reducer, but initialState might be tricky to remember.
  // The custom Hook useStudentContext will return students and majors -- exactly what we need for the initial state object. So we set the initial state's value to exactly the return value of useStudentContext:
  const initialState = useStudentContext();

  // Initialize `useReducer` hook. Returns state and a dispatch function. Accepts arguments of our reducer and initial state
  // 🔑 Remember that useReducer returns state and a dispatch() function:
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      {/* Now accessing students from our state object returned from the useReducer hook */}
      {state.students ? (
        <>
          <section className="student-list">
            <table>
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Name</th>
                  <th>Major</th>
                  <th>Remove</th>
                </tr>
              </thead>

              <tbody>
                {/* Access students from our state object returned from useReducer */}
                {state.students.map((student) => (
                  <tr key={student.id}>
                    <td>{student.id}</td>
                    <td>{student.name}</td>
                    <td>{student.major}</td>
                    <td>
                      {/* We replace our removeStudent method with our dispatch function passing the type and payload */}
                      <button
                        type="button"
                        onClick={() => {
                          console.log('🚀 StudentList.js: Dispatched remove!');
                          // 🔑 Finally, to make this app work we have to manipulate state using the dispatch() function. This method expects an object with type and payload attributes:
                          return dispatch({
                            type: REMOVE_STUDENT,
                            payload: student.id,
                          });
                        }}
                      >
                        <span role="img" aria-label="delete">
                          ✖️
                        </span>
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>

            <div className="add-student">
              <input
                value={state.studentName}
                onChange={(e) =>
                  dispatch({ type: SET_STUDENT_NAME, payload: e.target.value })
                }
                placeholder="New student name..."
                type="text"
              />

              <select
                onChange={(e) =>
                  dispatch({ type: SET_STUDENT_MAJOR, payload: e.target.value })
                }
                value={state.studentMajor}
              >
                <option>Choose major...</option>
                {/* Access our majors array from our state object returned from useReducer */}
                {state.majors.map((major) => (
                  <option key={major} value={major}>
                    {major}
                  </option>
                ))}
              </select>

              <button
                type="button"
                onClick={() => {
                  console.log('🚀 StudentList.js: Dispatched add student! ');
                  return dispatch({
                    type: ADD_STUDENT,
                    payload: {
                      name: state.studentName,
                      major: state.studentMajor,
                    },
                  });
                }}
              >
                Add Student
              </button>
            </div>
          </section>
        </>
      ) : (
        <span>Hmm... seems that there are no students here!</span>
      )}
    </div>
  );
}
