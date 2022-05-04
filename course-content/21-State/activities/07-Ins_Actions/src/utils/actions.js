// 🔑 It is common practice to set variable names for each kind of action in a new file called actions.js.
// Doing so allows those actions to be referenced by other parts of your application as it grows in scale:
// Actions are events that trigger specific functionality in the reducer:
// Other developers who join this project could easily understand which options are available to manipulate state, because we provide that information.
/*
 * ADD_CAR:
 * - takes a car object as payload with make, model, isRunning parameters
 * - creates new ID for car based on random number
 * - pushes new car to the end of copy of cars array
 * - updates cars array
 */
export const ADD_CAR = 'ADD_CAR';
/*
 * REMOVE_CAR:
 * - takes a car ID as payload
 * - finds car based on ID and removes via filter method
 * - updates cars array
 */
export const REMOVE_CAR = 'REMOVE_CAR';
/*
 * START_CAR:
 * - takes a car ID as payload
 * - finds car based on ID and makes a copy of it
 * - Updates the "isRunning" property of the car copy
 * - Makes a copy of cars array
 * - Saves a new copy of cars array with the updated car
 */
export const START_CAR = 'START_CAR';
/*
 * STOP_CAR:
 * - takes a car ID as payload
 * - finds car based on ID and makes a copy of it
 * - Updates the "isRunning" property of the car copy
 * - Makes a copy of cars array
 * - Saves a new copy of cars array with the updated car
 */
export const STOP_CAR = 'STOP_CAR';
