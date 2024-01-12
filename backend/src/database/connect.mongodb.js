const mongoose = require("mongoose");
const connectionString = process.env.MONGO_URI;

const connectDatabase = async () => {
  try {
    await mongoose.connect(connectionString, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log("Connection established to MongoDB database successfully!");
  } catch (error) {
    console.error("Error connecting to MongoDB: ", error);
  }
};

module.exports = connectDatabase;
