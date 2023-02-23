const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const BlogSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  content: {
    type: String,
    required: true
  },
  UserEmail:{
    type: String,
    required: true
  },
  createdDate:{type:Date,default:Date.now()}

},{versionKey:false});

const BlogModel = mongoose.model('Blog', BlogSchema);

module.exports = BlogModel;
