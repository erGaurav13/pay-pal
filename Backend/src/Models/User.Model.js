const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  username: { type: String, required: true, trim: true },
  email: { type: String, required: true, trim: true, unique: true },
  password: { type: String, required: true, trim: true },
});

const UserModel = mongoose.model("user", userSchema);
module.exports = UserModel;
