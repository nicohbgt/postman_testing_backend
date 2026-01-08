const users = [];
module.exports = users;

const express = require('express');
const router = express.router();
const authContoller = require('../controllers/auth.controller');

router.post("register", authController.register);
router.post("login", authController.login);

module.exports = router;