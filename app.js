const express =require("express");
const app=express();


app.get("/",(req,res)=>{
    res.json({
        message:"I am active"
    })
})

app.listen(3000,()=>{
    console.log("Node is running on port 3000")
})

