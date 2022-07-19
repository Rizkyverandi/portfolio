const jwt = require("jsonwebtoken");
require("dotenv").config;
const fs = require("fs")
const privateKey = fs.readFileSync("./private.key", "utf8");
const publicKey =  fs.readFileSync("./public.key", "utf8");

//sign jwt
exports.signJWT = (payload, expiresIn) => {
  return jwt.sign(payload, privateKey, { algorithm: "RS256", expiresIn });
};

//verify jwt
exports.verifyJWT = (token) => {
  try {
    const decoded = jwt.verify(token, publicKey);
    return { payload: decoded, expired: false };
  } catch (error) {
    return { payload: null, expired: error.message.includes("jwt expired") };
  }
};
