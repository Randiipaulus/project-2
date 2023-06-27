var express = require('express');
var router = express.Router();

const booksCtrl = require('../controllers/books');

// functions (get routes)

router.get('/', booksCtrl.index);
// router.get('/new', booksCtrl.new);
// router.get('/edit/:id', booksCtrl.edit);
// router.get('/:id', booksCtrl.show);

// functions actions
// router.post('/', booksCtrl.create);
// router.put('/:id', booksCtrl.update);
// router.delete('/:id', booksCtrl.delete);



module.exports = router;




git config --global user.name "Randiipaulus"
git config --global user.email "randyulises18@Gmail.com"
git config --global user.name "Randiipaulus"