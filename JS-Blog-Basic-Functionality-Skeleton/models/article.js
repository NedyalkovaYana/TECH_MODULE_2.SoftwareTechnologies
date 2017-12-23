const mongoose = require('mongoose');
const ObjectId = mongoose.Schema.Types.ObjectId;

let articleSchema = mongoose.Schema({
    title: {type: String, required: true},
    content: {type: String, required: true},
    author: {type: ObjectId, required: true, ref: 'User'},
    date: {type: Date, default: Date.now()}
});

const article = mongoose.model('article', articleSchema);

module.exports = article;