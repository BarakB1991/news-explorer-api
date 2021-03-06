const mongoose = require('mongoose');

const validate = require('validator');

const articleSchema = new mongoose.Schema({
  keyword: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  text: {
    type: String,
    required: true,
  },
  date: {
    type: String,
    required: true,
  },
  source: {
    type: String,
    required: true,
  },
  link: {
    type: String,
    required: true,
    validate: {
      validator(v) {
        return validate.isURL(v, {
          require_protocol: true,
          allow_underscore: true,
        });
      },
    },
  },
  image: {
    type: String,
    required: true,
    validate: {
      validator(v) {
        return validate.isURL(v, {
          require_protocol: true,
          allow_underscore: true,
        });
      },
    },
  },
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'user',
    select: false,
  },
});

module.exports = mongoose.model('article', articleSchema);
