const express = require("express");
const cors=require("cors")
const { connect } = require("./src/MongoDb/mongodb.connect");
const UserRouter = require("./src/Routes/UserRoutes/user.Routes");
const TaskRoute = require('../Backend/src/Routes/TaskRoutes/TaskRoutes')

const dotenv = require('dotenv');
dotenv.config();

const PORT = process.env.PORT ||8080;
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors())


// routing table
app.use("/user", UserRouter);
app.use('/task',TaskRoute)
app.get("/", (req, res) => {
  return res.send("Hi");
});

app.listen(PORT, async () => {
  try {
    await connect;
  } catch (e) {
    console.log(e);
  }
  console.log(`server started at ${PORT}`);
});
