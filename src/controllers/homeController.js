const path = require('path');


const controller ={
    home: (req,res)=>{
      return  res.render(path.join(__dirname,'../views/home'));
    }, 
    login: (req,res)=>{
      return res.render(path.join(__dirname,'../views/login'));
    },
    register: (req,res)=>{
      return res.render(path.join(__dirname,'../views/register'));
    }
}

module.exports =controller;