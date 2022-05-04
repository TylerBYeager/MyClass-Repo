import React, { createContext, useContext, useState } from 'react';

const StudentContext = createContext();

// Custom hook to provide usage of the student context
export const useStudentContext = () => useContext(StudentContext);

export const StudentProvider = ({ children }) => {
  const [students, setStudents] = useState([
    {
      id: 1,
      name: 'Sayid',
      major: 'Computer Science',
    },
    {
      id: 2,
      name: 'Sun-Hwa',
      major: 'Data Science',
    },
  ]);

  // Function to add a student
  // The idea is to extract that functionality into a single reducer function. Let's look at those methods to see what we need to include in the reducer function:
  const addStudent = (student) => {
    // Prevent adding blank entries
    if (!student.name) {
      return;
    }
    const id = students.length + 1;

    const newStudent = { ...student, id };

    setStudents([...students, newStudent]);
  };

  // Function to remove a student
  // Now that we know we need the reducer to handle adding and removal of students, let's navigate to reducers.js and create the reducer.
  const removeStudent = (id) => {
    const newStudentsList = [
      ...students.filter((student) => student.id !== id),
    ];

    setStudents(newStudentsList);
  };

  const majors = [
    'Mathematics',
    'Computer Science',
    'Art',
    'English',
    'Political Science',
    'Journalism',
    'Engineering',
  ];

  // The value prop expects an initial state object
  return (
    <StudentContext.Provider
      value={{ students, addStudent, removeStudent, majors }}
    >
      {children}
    </StudentContext.Provider>
  );
};
