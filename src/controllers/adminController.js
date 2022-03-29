const path = require('path');
const db = require('../database/models');
const Sequelize=require('sequelize')
const controller={

    adminHome: async(req,res) => {
       const products= await db.Product.findAll()
       return res.render(path.join(__dirname,'../views/admin/listaProductos.ejs'),{products});
    },
    newProducto: async(req,res) => {
       const products= await db.Product.findAll()
       return res.render(path.join(__dirname,'../views/admin/newProducto.ejs'));
    }
}
module.exports=controller;