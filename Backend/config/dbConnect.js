const mongoose = require("mongoose");

const dbConnect = async () => {
  const dbUri = process.env.MONGODB_URL;
  if (!dbUri) {
    console.error("MONGODB_URL is not defined in the environment variables.");
    process.exit(1); // Exit process if URL is missing
  }

  try {
    await mongoose.connect(dbUri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Database Connected Successfully");
  } catch (error) {
    console.error(`Database connection error: ${error.message}`);
    process.exit(1); // Exit process if connection fails
  }
};

module.exports = dbConnect;
