// modules required for routing
let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');

// define the book model
let Books = require('../models/books');

/* GET books List page. READ */
router.get('/', (req, res, next) => {
  // find all books in the books collection
  books.find( (err, books) => {
    if (err) {
      return console.error(err);
    }
    else 
    {
      console.log(data);
      res.render('/books.ejs', { title: 'Books', books: data });
    }

  });

});

//  GET the Book Details page in order to add a new Book
router.get('/add', (req, res, next) => {

    /*****************
     * ADD CODE HERE *
     *****************/

    res.render('index', { title: 'Add Book' });
 /*****************************************************/
});

// POST process the Book Details page and create a new Book - CREATE
router.post('/add', (req, res, next) => {

    /*****************
     * ADD CODE HERE *
     *****************/
    let books = Books.Model({
      "title" :  req.body.name,
      "description" :  req.body.name,
      "price" :  req.body.name,
      "author" :  req.body.name,
      "genre":  req.body.name
  });

  Book.Model.create(books, (err, Books) => {
      if(err)
      {
          console.log(err);
          res.end(err);
      }
      res.redirect('/index');
  });
  /*****************************************************/

});

// GET the Book Details page in order to edit an existing Book
router.get('/:id', (req, res, next) => {

    /*****************
     * ADD CODE HERE *
     *****************/
    let id = req.params.id;

    // pass id to the db 
    Books.Model.findById(id, (err, BooksToEdit) => {
        if(err)
        {
            console.log(err);
            res.end(err);
        }
        // show the edit view
        res.render('/index', { title: 'Edit book', data });
    });
 /*****************************************************/
});

// POST - process the information passed from the details form and update the document
router.post('/:id', (req, res, next) => {

    /*****************
     * ADD CODE HERE *
     *****************/

    let id = req.params.id;

    // instantiate a new object of type Component
    let updatedBooks = Books.Model({
      "title" :  req.body.name,
      "description" :  req.body.name,
      "price" :  req.body.name,
      "author" :  req.body.name,
      "genre":  req.body.name
   });

   Books.Model.updateOne({_id: id}, updatedBooks, (err) => {
       if(err)
       {
           console.log(err);
           res.end(err);
       }
       res.redirect('/index');
   });

});

// GET - process the delete by user id
router.get('/delete/:id', (req, res, next) => {

    /*****************
     * ADD CODE HERE *
     *****************/
    let id = req.params.id;

    Books.Model.remove({_id: id}, (err) => {
        if(err)
        {
            console.log(err);
            res.end(err);
        }
        res.redirect('/index');
    });
});


module.exports = router;
