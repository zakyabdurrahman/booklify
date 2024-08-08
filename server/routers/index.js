const AuthController = require('../controllers/authController');
const authentication = require('../middlewares/authentication');

const router = require('express').Router();
const booksRouter = require('./booksRouter');

router.post('/login', AuthController.login);
router.post('/register', AuthController.register);
router.post('/google-login', AuthController.googleLogin);

router.use(authentication);

router.use('/books', booksRouter);


module.exports = router;