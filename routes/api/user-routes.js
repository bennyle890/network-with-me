const router = require('express').Router();
const { getAllUser, createUser, getUserById, updateUser, deleteUser, addFriend, removeFriend } = require('../../controllers/user-controller');

// Set up GET all and POST /api/users
router
    .route('/')
    .get(getAllUser)
    .post(createUser);

// Set up GET one, PUT, and Delete at /api/users/:id
router
    .route('/:id')
    .get(getUserById)
    .put(updateUser)
    .delete(deleteUser);

// /api/users/<userId>/<friendId>
router
    .route('/:userId/friends/:friendId')
    .post(addFriend)
    .delete(removeFriend);

module.exports = router;