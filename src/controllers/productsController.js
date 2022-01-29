const path=require("path");

const controller={
    products: (req,res)=>{
      return res.render(path.join(__dirname,'../views/products/products'));
    },
    listProducts: (req,res)=>{
      return res.render(path.join(__dirname,'../views/products/listProducts'));
    },

    newProducts: (req,res)=>{
      return res.render(path.join(__dirname,'../views/products/newProduct'));
    }
  }
module.exports = controller; 