require('dotenv').config();
const express = require('express');
const app = express();


app.get('/' , (req, res)=>{
    res.send("hello i am ahsan from homepage")
})

app.get('/login', (req,res)=>{
    res.send("you are currently on login page")
})

app.listen( process.env.PORT,  ()=>{
    console.log("server is listening on port 3000....")
})