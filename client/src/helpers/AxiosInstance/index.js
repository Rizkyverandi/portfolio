const axios = require("axios");

const SendRequest = axios.create({
  baseURL: "http://localhost:8000/api/",
  //timeout: 1000,
});

export default SendRequest;
