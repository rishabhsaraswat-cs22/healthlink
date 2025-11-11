const mongoose = require('mongoose');

const connection = async () => {
  try {
    await mongoose.connect("mongodb+srv://risaraswat234_db_user:O37LqdWUVM6vNZqa@cluster0.zlloct0.mongodb.net/hospitalDB?retryWrites=true&w=majority&appName=Cluster0");
    console.log("✅ Connected to MongoDB Atlas");
  } catch (error) {
    console.error("❌ MongoDB connection error:", error.message);
    process.exit(1); // Stop the server if DB connection fails
  }
};

module.exports = connection;
