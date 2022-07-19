const express = require("express");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const morgan = require("morgan");
const mongoose = require("mongoose");
require("dotenv").config();
const { workRoute, adminRoute, homeRoute } = require("./routes/index.js");
const path = require("path");
const mustBeLogin = require("./middleware/mustBeLogin.js");

//app
const app = express();

//Connecting to MongoDB
mongoose
  .connect(process.env.CONECSTR_MONGO, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("MongoDB Running!"))
  .catch((err) => {
    console.log(err.message);
  });

//middleware
app.use(morgan("dev"));
app.use(bodyParser.json());
app.use(cookieParser());

//cors
app.use(
  cors({
    origin: process.env.DEV_CONF,
    optionsSuccessStatus: 200,
    methods: ["GET", "POST"],
    credentials: true,
  })
);

// Body parser middleware
app.use(bodyParser.urlencoded({ extended: true, limit: "10mb" }));
app.use(bodyParser.json({ limit: "10mb" }));

//App routes to handle requests
app.use("/api/work", workRoute);
app.use("/api/admin", adminRoute);
app.use("/api/home", homeRoute)

// Function to serve all static files
// inside public directory.
app.use(express.static("public"));
app.use("/uploads", express.static(path.join(__dirname, "uploads")));

// Authorize user.
app.get("/api/authorize", mustBeLogin, (req, res) => {
  res.status(201).json({ logged: true, user: req.user });
});

app.listen(8000, () => {
  console.log("Server is running on port 8000");
});
