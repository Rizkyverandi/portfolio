const Admin = require("../models/admin");
const { signJWT } = require("../utils/jwt");

exports.authUser = async (req, res) => {
  const admin = await Admin.findOne({ name: "Rizky Verandi" }); //find name in db, in this project only has one superuser.

  admin.comparePassword(req.body.password, (err, isMatch) => {
    if (err)
      return res
        .status(500)
        .json({ message: "Server busy.. Please wait a moment." });
    else if (!isMatch)
      return res.status(401).json({ message: "Wrong key-phrase." });
    else if (isMatch) {
      //Password match. Now generate token
      let accessToken = signJWT({ name: admin.name, role: admin.role }, "15m"); //assign jwt access token.

      //set access token in cookie
      res.cookie("a_token", accessToken, {
        maxAge: 300000,
        httpOnly: true,
      });

      return res.status(201).json({ message: "Login Success.", roles: [admin.role], name: admin.name });
    }
  });
};
