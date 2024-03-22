const express = require('express');

const { authUser, registerUser, allUsers } = require('../controllers/userControllers');
const { protect } = require('../middleware/authorization');

const router = express.Router();

router.post('/', registerUser);             // This handles the Register route for the user
router.post('/login',  authUser);   // This handles the Login route for the user 

router.get('/', protect, allUsers);                  // This handles the Get all users route

module.exports = router;
 