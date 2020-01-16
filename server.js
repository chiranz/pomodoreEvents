const express = require("express");
const mongoose = require("mongoose");
const path = require("path");
const config = require("config");
const app = express();

// Body Parser Middleware
app.use(express.json());

// DB config
const db = config.get("mongoURI");

// Connect to Mongo
mongoose
  .connect(db, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
  })
  .then(() => console.log("MongoDB connected!"))
  .catch(err => console.log(err));

// Use API Routes
app.use("/api/topics", require("./routes/api/Topics"));
app.use("/api/users", require("./routes/api/users"));
app.use("/api/auth", require("./routes/api/auth"));

// Serve Static assets if we are in production
if (process.env.NODE_ENV === "production") {
  // Set static folder
  app.use(express.static("client/build"));
  app.get("*", (res, req) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
