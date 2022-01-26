const path=require("path");

const controller={
    products: (req,res)=>{
      return res.render(path.join(__dirname,'../views/products'));
    }
}
module.exports = controller; 