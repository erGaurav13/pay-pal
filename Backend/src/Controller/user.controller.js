const UserModel = require("../Models/User.Model");
const dotenv = require("dotenv");
dotenv.config();
const bcrypt = require("bcrypt");
const saltRound = 10;
const jwt = require("jsonwebtoken");

const createUser = async (username, email, passwordnothash) => {
  try {
    // check if user is already exists;
    const existingUser = await UserModel.findOne({ email });
    if (existingUser) {
      return { message: "User exist Already" };
    }

    // Hash Password;
    const password = await bcrypt.hash(passwordnothash, saltRound);

    // create User;
    const user = await UserModel.create({ username, email, password });
    return { message: "User registered successfully" };
  } catch (e) {
    console.log(e);
    return res.status(500).send({ message: "Internal server error" });
  }
};

const loginUser = async ({ email, password }) => {
  try {
    // check if user exists;
    const user = await UserModel.findOne({ email });
    if (!user) {
      return {
        message: "Invalid email or password",
        token: null,
        refreshtoken: null,
      };
    }

    // Validate Password;
    const isValidPassword = await bcrypt.compare(password, user.password);

    if (!isValidPassword) {
      return {
        message: "Invalid email or password",
        token: null,
        refreshtoken: null,
      };
    }

    //    generate JWT token;
    const token = jwt.sign({ email: user.email,username:user.username }, process.env.SECRETE_KEY, {
      expiresIn: process.env.TOKEN_EXP,
    });
    const refreshtoken = jwt.sign(
      { email: user.email },
      process.env.SECRETE_KEY,
      {
        expiresIn: process.env.REFRESH_TOKEN_EXP,
      }
    );

    return { message: "Login Sucessfully", token, refreshtoken };
  } catch (e) {
    console.log(e);
    return e;
  }
};

module.exports = {
  createUser,
  loginUser,
};
