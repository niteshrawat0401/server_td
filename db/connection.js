const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("✅ MongoDB Connected");
  } catch (error) {
    console.error("❌ MongoDB Connection Error:", error);
    process.exit(1);
  }
};

module.exports = connectDB;



// module.exports = mongoose.connect('mongodb+srv://niteshrawat0401:czLuPl8vzINcY6hh@cluster0.uwefq.mongodb.net/');
