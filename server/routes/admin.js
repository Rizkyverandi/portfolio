const express = require("express");
const router = express.Router();
const { authUser } = require("../controllers/AdminController");


//Handling all the incoming requests
router.post("/", authUser);


module.exports = router;
