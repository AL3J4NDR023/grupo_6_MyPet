const path = require('path');
const db = require('../database/models');
const { validationResult } = require('express-validator');
const bcrypt = require('bcrypt');
const controller={
        login: (req,res) => {
                
            return res.render(path.join(__dirname,'../views/users/login'));
        },
        procesoLogin: async (req, res) => {
           
            const {email,password} = req.body;
            user= await db.User.findOne({
                where: {
                    email: email
                }
            })
            
            if(user){
                pass=bcrypt.compareSync(password,user.password);
                if(pass){
                delete user.password;
                req.session.userLogin =user;
                 console.log(req.session)
                    return res.redirect('/')
                }
            }
                return res.render(path.join(__dirname,'../views/users/login'),{
                    errors:{
                        email:{
                            msg:'Datos incorrectos'
                        }
                    }
                })
            
            
            
        },
        registro: (req,res) => {
            
            return res.render(path.join(__dirname,'../views/users/register'));
        },
        procesoRegistro: async (req, res) => {
            const errorsValidator =validationResult(req);
            
                if(errorsValidator.errors.length>0){
                    return res.render(path.join(__dirname,'../views/users/register'),{errors:errorsValidator.mapped(),old:req.body});

                }else{
                const {name,lastname,email,password, address,cellphone,passwordConfirm}=req.body
                
                await db.User.create({
                    name,
                    lastname,
                    email,
                    address,
                    cellphone,
                    password: bcrypt.hashSync(password,10),
                    idRol:1,
                    image: req.file.filename
                    
                 })
                    return res.redirect('/');
                }
        },
        logout:(req,res)=>{
            req.session.destroy();
            res.redirect('/');
        }
      
      
        }
        
        module.exports = controller; 