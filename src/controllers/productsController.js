const path = require('path');
const fs = require('fs');

const productsFilePath = path.join(__dirname, '../data/productsData.json');
const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));

const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");

const controller={
    products: (req,res)=>{
      return res.render(path.join(__dirname,'../views/products/products'),{products,toThousand});
    },
    /**detail products */
    detail: (req, res) => {
      let id= req.params.id;
      let product = products.find(p => p.id ==id);
      res.render(path.join(__dirname,'../views/products/detail'), {product,toThousand})
    },
    /** list all products*/
    listProducts: (req,res)=>{
      return res.render(path.join(__dirname,'../views/products/listProducts'),{ products,toThousand});
    },
    /**New products method GET */
    newProducts: (req,res)=>{
      return res.render(path.join(__dirname,'../views/products/newProduct'));
    },

    create: (req,res)=>{
      
        let newProduct ={
          id:products[products.length-1].id + 1,
          ...req.body,
          image:'tapetes.png'
        };

        products.push(newProduct);
        fs.writeFileSync(productsFilePath,JSON.stringify(products,null,' '));
        res.redirect('/products/list-products')

    },
    /**EDIT PRODUCT */
    edit:(req,res)=>{
      let id= req.params.id;
      let productToEdit = products.find(p => p.id ==id);
        res.render(path.join(__dirname,'../views/products/editProduct'),{ productToEdit});
    },
    update: (req,res)=>{
      let id= req.params.id;
		let productToEdit = products.find(p => p.id ==id);
		productToEdit={
			id: productToEdit.id,
			...req.body,
			image: productToEdit.image
		};
		let newproducts=products.map(product =>{
		//	product.id == productToEdit.id ? product= {...productToEdit}:product;
			if(product.id== productToEdit.id){
				return product={...productToEdit};
			}else{
			return product;
			}
      });
      fs.writeFileSync(productsFilePath, JSON.stringify(newproducts,null,' '));
		    res.redirect('/products/list-products');
    },
    delete: (req,res)=>{
      let id= req.params.id;
      console.log(id);
      let finalProduct= products.filter(p => p.id !=id);
      fs.writeFileSync(productsFilePath, JSON.stringify(finalProduct,null,' '))
      res.redirect('/products/list-products');
    }

  }
module.exports = controller; 