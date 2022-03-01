const path = require('path');
const fs = require('fs');
const { validationResult } = require('express-validator');

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

    },
    login: (req,res)=>{
      return res.render(path.join(__dirname,'../views/users/login'));
    },
    processLogin : (req,res) => {
      let errors = validationResult(req);

      if(errors.isEmpty()) {
        let userJson = fs.readFileSync('user.json', {encoding: utf8});
        let users;
        if (userJson == " ") {
          users = [];
        } else {
          users = JSON.parse(userJson);
        }

        for (let i = 0; i < users.length; i++) {
          if (user[i].email == req.body.email) {
            if(bcryptjs.compareSync(req.body.password, user[i].password)){
              let usuarioALogeado = user[i];
              break;
            }
          }
          
        }

        if (usuarioALogeado == undefined) {
          return res.render('login', {errors: [
            {msg: 'credenciales invalidas'}
          ]});
        }

        req.session.usuarioLogeado = usuarioALogeado;
        res.render('success')

      } else {
        return res.render('users/login', {errors: errors.errors});

      }
    }
  }
module.exports = controller; 