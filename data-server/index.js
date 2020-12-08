const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();

category = require("./categoryroute");
exercise = require("./exerciseroute");


mongoose
  .connect(
    "mongodb+srv://user:1234@cluster0.gf86e.mongodb.net/feedback?retryWrites=true&w=majority",
    { useNewUrlParser: true, useUnifiedTopology: true }
  )
  .then(() => console.log("Connected to database."))
  .catch((err) => console.log(err));

app.use(cors());
app.use(express.json());

app.use("/api/category", category);
app.use("/api/exercise", exercise);

const PORT = 3000;

app.listen(PORT, console.log(`Listening at ${PORT}`));
