const AuthController = require('../controllers/authController');

const router = require('express').Router();

router.post('/login', AuthController.login);

module.exports = router;