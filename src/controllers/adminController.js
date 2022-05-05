const path = require('path');
const db = require('../database/models');
const Sequelize=require('sequelize');
const bcrypt = require('bcrypt');
const { validationResult } = require('express-validator');
const controller={

    adminHome: async(req,res) => {
       const products= await db.Product.findAll({
        include: [{ association: 'category' },{ association: 'brand' }],
    });
       
       return res.render(path.join(__dirname,'../views/admin/listaProductos.ejs'),{products});
    },
    newProducto: async(req,res) => {
      const category= await db.Category.findAll();
      const mascota= await db.Mascota.findAll();
      const brand= await db.Brand.findAll({order:[['name']]});
      
       return res.render(path.join(__dirname,'../views/admin/crearProducto.ejs'),{category,mascota,brand});
    },
    create: async(req, res) => {
      
      const {name,price,amount,description,color,brand,mascota,category} = req.body;
      await db.Product.create({name,price, amount,description,color,
        idBrand:parseInt(brand),
        idMascota:parseInt(mascota),
        idCategory:parseInt(category), 
        image: req.file.filename
      });
      return res.redirect('/admin');
  },
  listaUsuarios: async(req, res) => {
    const usuarios = await db.User.findAll({
      include: [{ association: 'rol' },]
  });
    return res.render(path.join(__dirname,'../views/admin/listaUsuarios.ejs'),{usuarios})
  },
  createUser: async (req, res) => {
    const rol= await db.Rol.findAll();
    
    return res.render(path.join(__dirname,'../views/admin/crearUsuario.ejs'),{rol})
  },
  newUser: async (req, res) => {
    const errorsValidator =validationResult(req);
            
    if(errorsValidator.errors.length>0){
      const rol= await db.Rol.findAll();
      return res.render(path.join(__dirname,'../views/admin/crearUsuario.ejs'),{rol},{errors:errorsValidator.mapped(),old:req.body});

    }else{
    const {name,lastname,email,password, address,cellphone,idRol, image}=req.body
    
    await db.User.create({
        name,
        lastname,
        email,
        address,
        cellphone,
        password: bcrypt.hashSync(password,10),
        idRol,
        image
        
     })
        return res.redirect('/');
    }
  }
  
}
module.exports=controller; 