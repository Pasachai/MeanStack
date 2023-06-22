const express = require('express');
const app = express();

const bookRoute = express.Router();
let Book = require('../model/book');

bookRoute.route('/add-book').post(async (req, res, next) => {
  try {
    const book = await Book.create(req.body)
    res.status(200).json(book)
  }
  catch(err) {
    res.status(500).json({error: err.message})
  }
})

bookRoute.route('/').get(async (req, res) => {
  try {
    const book = await Book.find();
    res.status(200).json(book)
  }
  catch(err) {
    res.status(500).json({error: err.message})
  }
})

bookRoute.route('/read-book/:id').get(async (req, res) => {
  try {
    const book = await Book.findById(req.params.id)
    res.status(200).json(book)
  }
  catch(err) {
    res.status(500).json({error: err.message})
  }
})

bookRoute.route('/update-book/:id').put(async (req, res, next) => {
  try {
    await Book.findByIdAndUpdate(req.params.id, {
      $set: req.body
    })
    res.status(200).json({message : "Book Updated Sucessfully"})
  }
  catch(err) {
    res.status(500).json({error: err.message})
  }
})

bookRoute.route('/delete-book/:id').delete(async (req, res, next) => {

  try {
    await Book.findByIdAndRemove(req.params.id)
    res.status(200).json({message : "Book Deleted Sucessfully"})
  }
  catch(err) {
    res.status(500).json({error: err.message})
  }
})

module.exports = bookRoute;
