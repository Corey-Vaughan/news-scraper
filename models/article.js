// ./models/Article.js

// ====================
//    DEPENDENCIES
// ====================
const mongoose = require('mongoose');
var Schema = mongoose.Schema;

// ====================
//        SCHEMA
// ====================
var ArticleSchema = new Schema({
    title : {
        type: String,
        required: true
    },
    summary : {
        type: String,
        required: true
    },
    link : {
        type: String,
        required : true
    },
    note : {
        type: Schema.Types.ObjectId,
        ref: 'Note'
    }
});

// Create Model
var Article = mongoose.model('Article', ArticleSchema);

// Export the Model
module.exports = Article;

