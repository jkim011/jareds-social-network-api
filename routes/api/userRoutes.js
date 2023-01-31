const router = require("express").Router();
const {
    getUsers,
    getSingleUser,
    createUser,
    updateUser,
    deleteUser,
    addFriend,
    deleteFriend
} = require('../../controllers/userController');

// Gets all users and posts new users
router.route("/")
  .get(getUsers)
  .post(createUser);

// Uses userId to get single user, update user, and delete user 
router.route("/:userId")
  .get(getSingleUser)
  .put(updateUser)
  .delete(deleteUser);

// Posts new friends and deletes friends from user model
router.route("/:userId/friends/:friendId")
  .post(addFriend)
  .delete(deleteFriend);

module.exports = router;