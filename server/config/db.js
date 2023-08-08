const mongoose = require("mongoose");
const dbConnectString = process.env.DB_URL;


const connectDB = async () => {
  try {
    mongoose.set("strictQuery", true);
    await mongoose.connect(dbConnectString, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log("MongoDB is Connected...");
  } catch (err) {
    console.error(err.message);
    process.exit(1);
  }
};

module.exports = connectDB;
