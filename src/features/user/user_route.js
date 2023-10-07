const express = require('express');
const userController = require('./user_controller');
const router = express.Router();

const user_controller = new userController();

router.get('/', user_controller.userHome);
router.get('/sign-in', user_controller.signIn);

module.exports = router;