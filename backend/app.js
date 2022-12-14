const express = require('express');
const app = express();

var cors=require('cors');
app.use(cors());

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());


app.use(express.static(__dirname+'')); //location of angular file 
console.log(__dirname);

app.post('/login',require('./router/login'));

const http = require('http').Server(app);
var server=http.listen(3000,function(){
    console.log("server Listening on port :3000");
})

