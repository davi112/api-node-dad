const { Router } = require('express');
const BookController = require('./app/controllers/BookController');
const AuthorController = require('./app/controllers/AuthorController');

const router = Router();

/*router.use((request, response) =>  {
  response.send('Interceptado');
});*/
 /* (request, response, next) =>  {
    request.appId = 'MeuAppid';
    next();
  },*/

router.get('/books',BookController.index);
router.get('/books/:id', BookController.show);
router.delete('/books/:id', BookController.delete);
router.post('/books/', BookController.store);
router.put('/books/:id', BookController.update);

router.get('/authors',AuthorController.index);
router.get('/authors/:id', AuthorController.show);
router.get('/authors/:id/books', AuthorController.showBooks);
router.delete('/authors/:id', AuthorController.delete);
router.post('/authors/', AuthorController.store);
router.put('/authors/:id', AuthorController.update);

module.exports = router;