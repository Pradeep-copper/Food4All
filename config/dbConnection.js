const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    const db = process.env.MONGO_URI;

    // Check if the MongoDB connection is already established
    if (mongoose.connection.readyState !== 1) {
      await mongoose.connect(db);
      console.log("MongoDB connected...");
    } else {
      console.log("MongoDB already connected...");
    }
  } catch (err) {
    console.log(err);
    process.exit(1);
  }
};

module.exports = connectDB;
