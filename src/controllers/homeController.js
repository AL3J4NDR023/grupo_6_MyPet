const path = require('path');
const fs = require('fs');
//const { validationResult } = require('express-validator');
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
    carrito: (req,res)=>{
      return  res.render(path.join(__dirname,'../views/carrito'));
    }
}

module.exports =controller;