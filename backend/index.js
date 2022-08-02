const express = require("express");
const bodyParser=require('body-parser')
var cors = require('cors')
var app = express();
app.use(cors())
app.use(express.static(__dirname + "/public"));
var mongohelper = require('./mongohelper')
// body parser allows us to get the body of the request
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get ('/user/findall', async (req,res)=>{
    let response = await mongohelper.findAll("user",(data)=>{
        res.json(data)
})
})

app.get('/user/add', (req,res)=>{ 
    mongohelper.add("user",req.query)  //user is the collection name referenced in mongohelper, it was the collectioname param that was passed 
    res.json('customer successfully added ')
})

app.get('/user/update',(req,res)=>{
    mongohelper.update("user",{username:req.query.username}, req.query)
    res.json('updated customer')
})
app.get('/user/Login/Homepage',(req,res)=>{
    res.json('hello')
})

app.listen(3000, () => {
    console.log("app started");
  });