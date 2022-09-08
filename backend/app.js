const express = require('express');
const app = express();

var cors=require('cors');
app.use(cors());

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());


app.use(express.static(__dirname+'')); //location of angular file 
console.log(__dirname);

app.get('/getData', (req, res) => {
  res.json({
    "statusCode": 200,
    "statusMessage":"SUCCESS"
  })
})

app.listen(3000, (req, res) =>{
  console.log('Express API os running at port 3000')
})

app.post('/login',require('./router/login'));