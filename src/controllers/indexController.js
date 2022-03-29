const path = require('path');
const db = require('../database/models');
const Sequelize=require('sequelize')
const controller={

    home: async(req,res) => {
       const products= await db.Product.findAll({order:[['id','DESC']], limit:4})
       const brand= await db.Product.findAll({limit:4, where: {idBrand:6}})
       
        return res.render('index.ejs',{products,brand})
    },
    detalle: async (req,res)=>{
        const id = req.params.id
        const product= await db.Product.findByPk(id)
        return res.render('detalleProducto.ejs',{product})
    
    }

}

module.exports=controller;