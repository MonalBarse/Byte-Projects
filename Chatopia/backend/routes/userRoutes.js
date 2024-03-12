const express = require('express');

const { authUser } = require('../controllers/userControllers');
const { registerUser } = require('../controllers/userControllers');

const router = express.Router();

router.post('/', registerUser);         // This handles the Register route for the user
router.post('/login', authUser);        // This handles the Login route for the user 


module.exports = router;
