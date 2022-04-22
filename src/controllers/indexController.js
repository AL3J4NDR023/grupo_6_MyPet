const path = require('path');
const db = require('../database/models');
const Sequelize=require('sequelize')
const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
const controller={
    
    home: async(req,res) => {
       const products= await db.Product.findAll({order:[['id','DESC']], limit:4})
       const brand= await db.Product.findAll({limit:4, where: {idBrand:6}})
       
        return res.render('index.ejs',{products,brand})
    },
    detalle: async (req,res)=>{
        const id = req.params.id
        const product= await db.Product.findByPk(id)
        const category = await db.Brand.findByPk(product.idBrand)
        return res.render('detalleProducto.ejs',{product,category})
    
    }

}

module.exports=controller;