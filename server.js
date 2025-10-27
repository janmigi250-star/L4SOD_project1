//import modules,packages and libraries
const express=require('express');
const app=express();
// set the server port
const PORT=3000;
// define a basic route
app.get('/',req,res()=>{
    res.get("hello from express server!"),
});