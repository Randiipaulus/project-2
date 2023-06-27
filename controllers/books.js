const {default: mongoose } = require('mongoose');
const book = require('../models/book');


module.exports = {
    // show: showPage,
    index: indexPage,
    // new: newPage,
    // edit: editPage,
    // create: createBook,
    // update: updateBook,
    // delete: deleteBook
}

//============================= GET FUNCTIONS=========================//
async function indexPage(req, res){
    try {
        const books = await Book.find({})
        res.render('books/index', {
            books
        })
    }   catch {
        console.log('error')
    }
}

// async function showPage(req, res) {
//     try {
//         const book = await Book.findById(req.params.id)
//         res.render('books/show', {
//             book
//         })
//     } catch {
//         console.log('error')
//     }
// }

// function newPage(req, res){
//     res.render('books/new')
// }


// async function editPage(req, res){
//     try {
//         const book = await Book.findById(req.params.id)
//         res.render('books/edit', {
//             book
//         });
//     } catch {
//         console.log('error')
//     }
// }

// // ============================= ACTIONS FUNCTIONS =========================//

// async function createBook(req, res){
//     try {
//         await Book.create(req.body)
//         res.redirect('/books')
//     } catch {
//         console.log('error')
//     }
// }

// async function updateBook(req, res){
//     try{
//         await Book.findByIdAndUpdate(req.params.id, req.body)
//         res.redirect('/books/' + req.params.id)
//     } catch {
//         console.log('error')
//     }
// }

// async function deleteBook(req, res){
//     try {
//         await Book.findByIdAndRemove(req.params.id)
//         res.redirect('/books')
//     } catch {
//         console.log('error')
//     }
// }





