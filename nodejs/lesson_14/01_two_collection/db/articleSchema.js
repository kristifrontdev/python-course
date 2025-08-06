const mongoose = require('mongoose');

const articleSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, 'Title is Required field'],
        minlength: [5, 'Minimum 5 characters'],
        maxlength: [100, 'Maximum 100 characters'],
        trim: true
    },
    content: {
        type: String,
        // required: true
    },
    url: { 
        type: String, 
        required :[true, 'URL is Required field'],
        unique: true,
        match: [/^[a-z0-9\-]+$/, 'The URL must contain only Latin letters, numbers and dashes']

    },
    prev : {
        type: String
    }
}, {
    timestamps: true // автоматически создаёт поля createdAt и updatedAt
});

const Article = mongoose.model('articles', articleSchema);

module.exports = Article;