const mongoose = require("mongoose");
const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const connectdb = require("./config/db");
const formroute = require("./routes/FormRoute")
const questiontoute = require("./routes/questionRoutes");


dotenv.config()
const app = express();
app.use(express.json());
app.use(cors())

app.use("/api/form",formroute);
app.use("/api/question",questiontoute);


connectdb()

try{
app.listen(5000,()=>{
  console.log("server is running")
})
}
catch(err)
{
  console.log(err)
}




