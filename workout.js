// In src/database/Workout.js
const DB = require("./db.json");

const getAllWorkouts = () => {
  return DB.workouts;
};

module.exports = { getAllWorkouts };