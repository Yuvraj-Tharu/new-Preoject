const mongoose = require("mongoose");
require("dotenv").config();
(async () => {
  try {
    await mongoose.connect(process.env.DB_URL);
    console.log("Connected to database");
  } catch (error) {
    console.log("Failed to connect to database", error);
  }
})();
