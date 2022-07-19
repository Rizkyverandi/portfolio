const express = require("express");
const router = express.Router();
const { contactMe } = require("../controllers/HomeController");


//Handling all the incoming requests
router.post("/contactme", contactMe);


module.exports = router;
