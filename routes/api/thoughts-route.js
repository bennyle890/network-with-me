const router = require('express').Router();
const { getAllThought, createThought, getThoughtById, updateThought, deleteThought, addReaction, removeReaction } = require('../../controllers/thought-controller')

// Set up GET all and Post at /api/thought
router
    .route('/')
    .get(getAllThought)
    .post(createThought);

// Set up GET, one, PUT, and DELETE at /api/thought/:id
router 
    .route('/:id')
    .get(getThoughtById)
    .put(updateThought)
    .delete(deleteThought);

// /api/thoughts/:thoughtId/reactions
router
    .route('/:thoughtId/reactions')
    .post(addReaction)

// /api/thoughts/:thoughtId/:reactionsId
router
    .route('/:thoughtId/reactions/:reactionsId/')
    .delete(removeReaction);

module.exports = router;