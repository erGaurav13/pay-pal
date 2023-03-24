const express = require("express");
const jwt=require('jsonwebtoken') 
const { createUser, loginUser } = require("../../Controller/user.controller");

const UserRouter = express.Router();
// Middleware
const verifytoken=(req,res,next) => {
  try {
    const token = req.headers.authorization?.split(' ')[1];

    if (!token) {
      return res.status(401).json({ message: 'Unauthorized' });
    }

    // Verify JWT token
    const decodedToken = jwt.verify(token, process.env.SECRETE_KEY);
    req.user = decodedToken;

    next();
  } catch (error) {
      return res.status(401).send({ message:"Unauthorised"})
  }
}

UserRouter.post("/signup", async (req, res) => {
  const { username, email, password } = req.body;
  if (!username || !email || !password) {
    return res.status(404).send({ message: "Required all fields" });
  }

  try {
    const { message } = await createUser(username, email, password);
    console.log(message)
    if (message == "User exist Already") {
      return res.status(400).send({ message: "User already exists" });
    }
    return res.status(201).send({message:"Created sucessfully"});
  } catch (e) {
    console.log(e);
    return res.send(e);
  }
});

UserRouter.post("/login", async (req, res) => {
  const { email, password } = req.body;
  console.log("email,password", email, password);
  if (!email || !password) {
    return res.status(400).send({ message: "All Fields required" });
  }

  try {
    const { token, message, refreshtoken } = await loginUser({
      email,
      password,
    });
    if (!token) {
      return res
        .status(401)
        .send({ message, token, refreshtoken });
    }
    return res.status(200).send({ message, token, refreshtoken });
  } catch (e) {
    console.log(e);
    return res.status(501).send({ message: "Server Error" });
  }
});

UserRouter.get("/product",verifytoken,(req, res) => {
return res.send({message:"Acess to routes token is verified"})
})

module.exports = UserRouter;
