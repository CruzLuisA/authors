const Author = require("../models/author.model");

// ^^^^^^^^^^^^^^^^^^CREATE ONE AUTHOR^^^^^^^^^^^^^^^^^^
const createAuthor = (req, res) => {
  Author.create(req.body)
    .then((author) => res.status(201).json(author))
    .catch((err) => res.status(400).json(err));
};

// ^^^^^^^^^^^^^^^^^^FIND ALL AUTHORS^^^^^^^^^^^^^^^^^^
const findAllAuthors = (req, res) => {
  Author.find()
    .then((authors) => res.status(200).json(authors))
    .catch((err) => res.status(400).json(err));
};

// ^^^^^^^^^^^^^^^^^^FIND ONE AUTHOR^^^^^^^^^^^^^^^^^^
const findOneAuthor = (req, res) => {
  const { id } = req.params;
  Author.findById(id)
    .then((author) => res.status(200).json(author))
    .catch((err) => res.status(400).json(err));
};

// ^^^^^^^^^^^^^^^^^^UPDATE ONE AUTHOR^^^^^^^^^^^^^^^^^^
const updateOneAuthor = (req, res) => {
  const { id } = req.params;
  Author.findByIdAndUpdate(id, req.body, { new: true, runValidators: true })
    .then((author) => res.status(200).json(author))
    .catch((err) => res.status(400).json(err));
};

// ^^^^^^^^^^^^^^^^^^DELETE ONE AUTHOR^^^^^^^^^^^^^^^^^^
const deleteOneAuthor = (req, res) => {
  const { id } = req.params;
  Author.findByIdAndDelete(id)
    .then((author) => res.status(200).json(author))
    .catch((err) => res.status(400).json(err));
};

module.exports = { createAuthor, findAllAuthors, findOneAuthor, updateOneAuthor, deleteOneAuthor };
