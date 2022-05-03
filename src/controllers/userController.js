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
            userLogin= await db.User.findOne({
                where: {
                    email: email
                } ,
                raw: true, // convertir en obeto
                nest: true,
            })
            
            if(userLogin){
                pass=bcrypt.compareSync(password,userLogin.password);
                if(pass){
                   
                    delete userLogin.password
                    req.session.userLogin =userLogin;
                
                    if(req.session.userLogin.idRol ==2){

                        if(req.body.remember_me){
                            res.cookie('userEmail', req.body.email, { maxAge: (1000 * 60) * 2})
                        }

                        return res.redirect('/admin')
                    }else{
                    return res.redirect('/')
                    }
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
            console.log(req.body);
            const errorsValidator =validationResult(req);
            
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
                    password: bcrypt.hashSync(password,10),
                    idRol:1,
                    image: req.file.filename
                    
                 })
                    return res.redirect('/');
                }
        },
        logout:(req,res)=>{
            res.clearCookie('userEmail')
            req.session.destroy();
            res.redirect('/');
        }
      
      
        }
        
        module.exports = controller; 