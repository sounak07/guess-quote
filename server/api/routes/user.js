const express = require('express')
const router = express.Router()

const User = require('../models/user')
const {authenticate} = require('../middleware/check-auth');

 const checkAuth = require('../middleware/check-auth')

const userController = require('../controllers/user')

router.post('/signup', userController.user_signup)

router.post('/login', userController.user_login)

// TODO: add additional routes for users

//route to test auth middleware   
router.get('/me',authenticate,(req,res) => {
    res.send(req.user);
  });

module.exports = router
