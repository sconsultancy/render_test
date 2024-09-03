const express = require("express");
const app = express();

app.get("/api",(req,res)=>{
    res.send({message:"We Rock"})
})


app.listen(5000,()=>{
    console.log("listening to port 5000");
});