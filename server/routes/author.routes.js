const express = require("express");
const authorRouter = express.Router();

const {
  createAuthor,
  findAllAuthors,
  findOneAuthor,
  updateOneAuthor,
  deleteOneAuthor,
} = require("../controllers/author.controller");


authorRouter
  .route('/')
  .get(findAllAuthors)
  .post(createAuthor);

authorRouter
  .route('/:id')
  .get(findOneAuthor)
  .put(updateOneAuthor)
  .delete(deleteOneAuthor);

  module.exports = authorRouter
