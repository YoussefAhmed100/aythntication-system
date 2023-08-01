const express= require("express");
const mongoose =require("mongoose");
const bodyParser= require("body-parser");
const userRouter=require('./Routers/userRouter.cjs')


const app=express();
app.use(bodyParser.json());

const url="";
// function to used conect on database
const conectDB = async() =>{

  try{
    mongoose.set('strictQuery', false)
    mongoose.connect(url)
    console.log("Concted to mongoose DB")

  }
  catch(err){
    console.log("error while concted to mongo "+err)
    process.exit();
  }

}
conectDB();
app.use('/' ,userRouter)

app.listen(4000)


