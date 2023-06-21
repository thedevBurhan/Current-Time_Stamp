const express=require("express");
const fs=require("fs");
const path=require("path");
const dirPath=path.join(__dirname,"TimeStamp");

//  initilaize express server framework

const app=express();

app.get("/",(req,res)=>{
   res.send("Hey there im working fine 🤣")
})


// Creating end Points
app.get("/sample",(req,res)=>{
   res.send("Hey, Sample End-Point working fine 😁")
})

// Creating Date-Time
app.get("/date-time",(req,res)=>{
  let date= new Date();
  let currentTimeStamp=date.toUTCString().slice(0,-3);
  let content=`The last updated timestamp :${currentTimeStamp}`;
  let fileName=currentTimeStamp.split(" ").join("").split(",").join("").split(":").join("");
 //console.log(dirPath);
  fs.writeFile(`${dirPath}/${fileName}.txt`,content,(err)=>{
   if(err){
       res.send("Error in writing the File");      
   }else{
       res.sendFile(path.join(dirPath,"date-time.txt"));
   }
 })
  
})
// listen to a server

app.listen(9000,()=>console.log("Server started in Localhost:9000"))