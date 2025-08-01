const { MongoClient } = require("mongodb");
const config = require("config");

const client = new MongoClient(config.mongoUrl);

async function connectDB() {
  await client.connect();
  const db = client.db(config.dbName);
  console.log("MongoDB connected");
  return {
    usersCollection: db.collection("users"),
    tasksCollection: db.collection("tasks"),
  };
}

module.exports = {
  connectDB,
  mongoUrl: config.mongoUrl,
};
