const path = require('path');


const controller ={
    home: (req,res)=>{
      return  res.render(path.join(__dirname,'../views/home'));
    }
}

module.exports =controller;