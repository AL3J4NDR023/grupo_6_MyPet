const path = require('path');
const fs = require('fs');
const { validationResult } = require('express-validator');
const bcryptjs = require('bcryptjs');

const productsFilePath = path.join(__dirname, '../data/productsData.json');
const products= JSON.parse(fs.readFileSync(productsFilePath, 'utf8'));
/** Notices */
const noticesFilePath = path.join(__dirname, '../data/noticesData.json');
const notices= JSON.parse(fs.readFileSync(noticesFilePath, 'utf8'));

const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
const visited= products.filter((producto)=> producto.category ==='visited')
const inSale=products.filter((producto)=> producto.category ==='in-sale')
const controller ={
    home: (req, res) => {
      return res.render('home',{visited,inSale,toThousand,notices})
    }, 
    login: (req,res)=>{
      return res.render(path.join(__dirname,'../views/login'));
    },
    processLogin : (req,res) => {
      let erros = validationResult(req);

      if(erros.isEmpty()) {
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
              let usuarioLogeado = user[i];
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
        return res.render('login', {erros: errors.errors});

      }


    },
    register: (req,res)=>{
      return res.render(path.join(__dirname,'../views/register'));
    }, 
    carrito: (req,res)=>{
      return  res.render(path.join(__dirname,'../views/carrito'));
    }
}

module.exports =controller;