const router = require('express').Router();

const BooksController = require('../controllers/booksController');


router.get('/', BooksController.readAll);

module.exports = router