const app = require("./app");
const mongoose = require("mongoose");
const dotenv = require("dotenv");

// Load environment variables
dotenv.config({ path: process.env.NODE_ENV === "PRODUCTION" ? "config.env" : ".env" });

// Handling Uncaught Exceptions
process.on("uncaughtException", (err) => {
  console.error("Uncaught Exception:", err);
  process.exit(1);
});

// MongoDB Connection
const db = require('./config/keys').mongoURI;
mongoose.connect(db, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => {
  console.log("MongoDB Connected");

  // Start the server after successful MongoDB connection
  const port = process.env.PORT || 4000;
  const server = app.listen(port, () => {
    console.log(`Server running on port ${port}`);
  });
})
.catch(err => {
  console.error("MongoDB Connection Error:", err);
  process.exit(1); // Exit process on MongoDB connection error
});
