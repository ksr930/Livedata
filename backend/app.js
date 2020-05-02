const express = require('express')
const bodyParser = require('body-parser')
var user = require('./modules/user');
var routes = require('./Routers')
const app = express();
const mongoose = require('mongoose');


var cors = require('cors')
var socketio = require('socket.io');

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.set("view engine", "ejs");
app.use("/", routes);


app.use(express.static(__dirname + "/public"));

mongoose.connect('mongodb://localhost/stock',{useUnifiedTopology:true ,useNewUrlParser:true},(err)=>{
    if(!err){
console.log('mongodb connection succeeded')
    }
    else{
console.log(err);
    }
})





var server = app.listen(5000,()=>console.log('connected'));

var io = socketio(server);




io.on('connection',(socket)=>{
    console.log('connection establish')
  


 setInterval(() => {
     user.create({stock_price:Math.floor(Math.random()*2000)},(err,data)=>{});

     user.find().sort({ _id: -1 }).limit(15).exec((err,data)=>{
console.log(data);
io.sockets.emit("newdata", data);
     })

     
 }, 1000);
 
 


  
   
  
})

