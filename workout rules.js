
// In src/v1/routes/workoutRoutes.js
const express = require("express");
const workoutController = require("../../controllers/workoutController");

const router = express.Router();

router.get("/", workoutController.getAllWorkouts);

router.get("/:workoutId", workoutController.getOneWorkout);

router.post("/", workoutController.createNewWorkout);

router.patch("/:workoutId", workoutController.updateOneWorkout);

router.delete("/:workoutId", workoutController.deleteOneWorkout);

module.exports = router;
router.get("/", cache("2 minutes"),  workoutController.getAllWorkouts);
// Custom made middlewares
const authenticate = require("../../middlewares/authenticate");
const authorize = require("../../middlewares/authorize");

router.post("/", authenticate, authorize, workoutController.createNewWorkout);