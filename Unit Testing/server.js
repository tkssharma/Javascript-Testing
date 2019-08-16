"use restrict";
//@ts-check
const express = require("express"),
      bodyParser = require("body-parser"),
      fs = require('fs'),
      filename='data/todolist.txt';
var app=express();
app.use(bodyParser.json());
console.log('Start our code of node.js');
app.get('/',function(req,res){
    console.log('get /');
    var readFileCallbak = function(err,data){
        if (err){
            res.status(500).send('Error reading the file');
            return;
        }
        res.status(200).send(data);
    };//readFileCallbak()
   fs.readFile(filename,'utf8',readFileCallbak);

});
app.post('/',function(req,res){
    console.log('post /');
    var readFileCallbak = function(err,data){
        if (err){
            res.status(500).send('Error reading the file');
            return;
        }
        data +='\n'+req.body.data;
        fs.writeFile(filename,data,(err)=>{
            if (err){
                res.status(500).send('Error writing the file');
                return;                
            }
        });
        res.status(201).send(data);
    };//readFileCallbak()
   fs.readFile(filename,'utf8',readFileCallbak);

});

app.listen(3000);
console.log('Server is running http://localhost:3000');