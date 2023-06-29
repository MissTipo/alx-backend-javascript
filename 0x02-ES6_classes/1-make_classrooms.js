// import ClassRoom class from 0-classroom.js
// Implement a function named initializeRooms. It should return an array of 3 ClassRoom objects with the sizes 19,20,34(in this order).
import ClassRoom from './0-classroom';

function initializeRooms() {
  const roomSizes = [19, 20, 34];
  const classRooms = [];

  for (const roomSize of roomSizes) {
    const classRoom = new ClassRoom(roomSize);
    classRooms.push(classRoom);
  }
  return classRooms;
}

module.exports = initializeRooms;
