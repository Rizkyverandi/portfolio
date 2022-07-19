const { verifyJWT } = require("../utils/jwt");

const mustBeLogin = (req, res, next) => {
  const result = verifyJWT(req.cookies.a_token);
  if (!result.payload) return res.json({ logged: false });
  else req.user = result.payload;
  next();
};

module.exports = mustBeLogin;
