const express = require('express');
const axios = require('axios')
const jwt = require("jsonwebtoken");
const jwtPass = "12345";

const app = express();

const allUser =[{
    email:"avijitram2016@gmail.com",
    username:"Avi",
    password:"1234"
},{
    email:"anjali@gmail.com",
    username:"Anjali",
    password:"2267"
}];
// async function getUser(){
//     const res = await axios.get('https://dummyjson.com/users');
//     allUser = res.data;
// }
// getUser();

function userExist(username){
    if(allUser.find(x=>x.username === username)){
        return true;
    }else{
        return false;
    }
}

app.use(express.json())

app.get("/",(req,res,next)=>{
    res.send("Authentication...")
});

app.post("/login",(req,res,next)=>{
    const username = req.body.username;
    const password = req.body.password;

    if(!userExist(username)){
        res.status(403).json({
            msg: "User does not exist!!!"
        })
        return;
    }

    const token = jwt.sign({username:username},jwtPass)
    res.json({
        token,
    })
});

app.get("/user",(req,res,next)=>{
    const token = req.header.auth;
    
})
app.listen(3000)

