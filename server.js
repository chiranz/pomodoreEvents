const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const path = require("path");

const topics = require("./routes/api/Topics");

const app = express();

// Body Parser Middleware
app.use(bodyParser.json());

// DB config
const db = require("./config/keys").mongoAtlasUri;

// Connect to Mongo
mongoose
  .connect(db, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => console.log("MongoDB connected!"))
  .catch(err => console.log(err));

// Use API Routes
app.use("/api/topics", topics);

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
