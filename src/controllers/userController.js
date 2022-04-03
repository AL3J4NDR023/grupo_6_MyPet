const path = require('path');
const db = require('../database/models');
const { validationResult } = require('express-validator');

const controller={
        login: (req,res) => {
                
            return res.render(path.join(__dirname,'../views/users/login'));
        },
        procesoLogin: async (req, res) => {
            const errores = validationResult(req)
            // console.log(req.body)
            const {email,password} = req.body;
            user= await db.User.findOne({
                where: {
                    email: email
                }
            })
            
            
        },
        registro: (req,res) => {
            
            return res.render(path.join(__dirname,'../views/users/register'));
        },
        procesoRegistro: async (req, res) => {
            const errorsValidator =validationResult(req);
            console.log(errorsValidator)
                if(errorsValidator.errors.length>0){
                    return res.render(path.join(__dirname,'../views/users/register'),{errors:errorsValidator.mapped(),old:req.body});

                }else{
                const {name,lastname,email,password, address,cellphone}=req.body
                await db.User.create({
                    name,
                    lastname,
                    email,
                    address,
                    cellphone,
                    password: password,
                    idRol:1,
                    image: req.file.filename
                    
                 })
                    return res.redirect('/');
                }
        }
      
      
        }
        
        module.exports = controller; 