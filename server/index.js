///require-import
const express=require("express");

const app=express();

require("dotenv").config();
const PORT =process.env.PORT ||4000;

//middleware to parse json request body
app.use(express.json());


//imports routes for TODO API
const todoRoutes=require("./routes/todos")
//mount the TODO API Routes
app.use("/api/v1",todoRoutes); 


//start server
app.listen(PORT,()=>{
    console.log( `Server is running on port ${PORT}`);
})     

//connect to database
const dbconnect=require("./config/database")
dbconnect();

//default route
app.get("/",(req,res)=>{

    res.send(  `<h1> This is Homepage Baby</h1>`); 
})