const path = require('path');
const db = require('../database/models');
const Sequelize=require('sequelize');
const { validationResult } = require('express-validator');
const controller={

    adminHome: async(req,res) => {
       const products= await db.Product.findAll()
       return res.render(path.join(__dirname,'../views/admin/listaProductos.ejs'),{products});
    },
    newProducto: async(req,res) => {
      const category= await db.Category.findAll();
      const mascota= await db.Mascota.findAll();
      const brand= await db.Brand.findAll({order:[['name']]});
      
       return res.render(path.join(__dirname,'../views/admin/newProduct.ejs'),{category,mascota,brand});
    },
    create: async(req,res)=>{
      
      console.log(req.body);
      res.redirect('/admin')
  }
}
module.exports=controller;