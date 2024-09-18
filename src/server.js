const express = require("express");
const app = express();


const PORT = process.env.PORT || 5000;

app.get("/api",(req,res)=>{
    res.send({message:"We Rock"})
})

app.get("/",(req,res)=>{
    res.send({message:"We Rock"})
})


app.listen(PORT,()=>{
    console.log("listening to port 5000");
});