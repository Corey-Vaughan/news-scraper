// ./models/Note.js

// ====================
//    DEPENDENCIES
// ====================
const mongoose = require('mongoose');
var Schema = mongoose.Schema;

// ====================
//        SCHEMA
// ====================
var NoteSchema = new Schema ({
    user : {
        type: String,
        required: true
    },
    body : {
        type: String,
        required: true
    }
});

// Create the model
var Note = mongoose.model('Note', NoteSchema);

// Export the model
module.exports = Note;