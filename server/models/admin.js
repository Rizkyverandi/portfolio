const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const adminSchema = mongoose.Schema({
  _id: mongoose.Types.ObjectId,
  email: {
    type: String,
    required: true,
    match:
      /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/,
  },
  password: {
    type: String,
    trim: true,
    unique: true,
    required: true,
  },
  name: {
    type: String,
    trim: true,    
  },
  role: {
    type: Number  
  }
});


//---FUNCTION---
adminSchema.methods.comparePassword = (plainPassword,cb) => {
  bcrypt.compare(plainPassword, this.password ,(err, isMatch) => {
      if(err) return cb(err)
      console.log(isMatch)      
      cb(null, isMatch);
  })
}

const Admin = mongoose.model("Admin", adminSchema, "admin");

module.exports = Admin;
