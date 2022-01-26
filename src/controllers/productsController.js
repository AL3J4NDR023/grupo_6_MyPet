const path=require("path");

const controller={
    products: (req,res)=>{
       res.sendFile(path.join(__dirname,'../views/products.html'));
    }
}
module.exports = controller; 