const express = require('express')
const router = express.Router()
const userController = require('../Controllers/UserController')
const { admin } = require('../Middleware/Auth')

router.post('/login',  userController.loginUser)

router.post('/register', userController.registerUser)

router.get('/', admin, userController.getUserDetails)

router.patch('/:userID', admin, userController.editUser)

router.delete('/:userID', admin, userController.deleteUser)

module.exports = router