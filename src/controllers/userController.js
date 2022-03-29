const path = require('path');
const controller={
login: (req,res) => {
        
    return res.render(path.join(__dirname,'../views/users/login'));
},
registro: (req,res) => {
    
    return res.render(path.join(__dirname,'../views/users/register'));
}
}
module.exports=controller;