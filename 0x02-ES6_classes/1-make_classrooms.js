// import ClassRoom class from 0-classroom.js
// Implement a function named initializeRooms. It should return an array of 3 ClassRoom objects with the sizes 19,20,34(in this order).

import ClassRoom from './0-classroom.js';

export default function initializeRooms() {
  return [new ClassRoom(19), new ClassRoom(20), new ClassRoom(34)];
}