require("dotenv").config();
const mongoose = require("mongoose");
const express = require("express");
const cors = require('cors')
const app = express();
const router = require('./routes/router')
require("./db/conn");



const port = 8003;

const users = require("./models/userSchema");
app.use(cors())

app.use(express.json())


app.use(router)

app.listen(port, () => {
  console.log(`Server is start post number ${port}`);
});
