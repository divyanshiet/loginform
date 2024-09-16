const express = require("express");
const app = express();
const router = require("./router/auth-router");

app.use("/api/auth",router);

app.get('/',(req,res)=>{
    res.status(200).send('okajny!!');
    
});
app.listen(4000, ()=>{
    console.log("server is running");
});