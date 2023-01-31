const router = require("express").Router();
const {
  getThoughts,
  getSingleThought,
  createThought,
  updateThought,
  deleteThought,
  addReaction,
  deleteReaction,
} = require("../../controllers/thoughtController");

// Gets all thoughts and posts new thoughts
router.route("/")
  .get(getThoughts)
  .post(createThought);

// Uses thoughtId to get single thought, update thought, and delete thought
router.route("/:thoughtId")
  .get(getSingleThought)
  .put(updateThought)
  .delete(deleteThought);

// Posts reaction to thought model
router.route("/:thoughtId/reactions")
  .post(addReaction);

// Deletes reaction from thought model
router.route("/:thoughtId/reactions/:reactionId")
  .delete(deleteReaction);

module.exports = router;