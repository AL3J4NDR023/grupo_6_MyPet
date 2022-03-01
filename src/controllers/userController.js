const path = require('path');
const fs = require('fs');

const usersFilePath = path.join(__dirname, '../data/users.json');
const users = JSON.parse(fs.readFileSync(usersFilePath, 'utf-8'));


const controller={
    
    register: (req,res)=>{
      return res.render(path.join(__dirname,'../views/users/register'));
  },

    create: (req,res)=>{
      
        let newUser ={
          id:users[users.length-1].id + 1,
          ...req.body,
          category: "user",
          image:'defaul.png'
          
        };
        console.log(newUser)
        users.push(newUser);
        fs.writeFileSync(usersFilePath,JSON.stringify(users,null,' '));
        res.redirect('/login')

    }
   

  }
module.exports = controller; 