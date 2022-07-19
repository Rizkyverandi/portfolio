const express = require("express");
const router = express.Router();
const {
  getAllWorks,
  addWork,
  deleteAll,
} = require("../controllers/WorkController");

//Middleware
const upload = require("../middleware/multer.js");
const mustBeLogin = require("../middleware/mustBeLogin.js");

//Handling all the incoming requests
router.get("/", getAllWorks);
router.post("/addwork", mustBeLogin, upload.single("work-img"), addWork);
router.delete("/deletework", deleteAll);

module.exports = router;
