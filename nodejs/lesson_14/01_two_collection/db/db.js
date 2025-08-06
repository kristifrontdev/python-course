const { MongoClient } = require("mongodb");
const config = require('config');
const mongoose = require('mongoose');

const mongoUrl = config.mongoUrl;
const client = new MongoClient(config.mongoUrl);

async function connectDB() {
  await mongoose.connect(mongoUrl, {})
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.error('Connection error', err));
}

module.exports = connectDB;