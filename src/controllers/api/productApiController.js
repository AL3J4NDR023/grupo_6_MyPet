const db= require('../../database/models');

const productApiController={
    listaProductos:async(req,res)=>{
        const products=await db.Product.findAll();
        const categories=await db.Category.findAll();
        const cbyCategory= await db.Category.findAll({include: [{ association: 'products' }]});
        const response={
            
            count:products.length,
            
            countByCategory:cbyCategory.map((item)=>(
                {
                name:item.name,
                count:item.products.length
                }
            )),
            data: products.map((item)=>(
                {id:item.id,
                name:item.name,
                description:item.description,
                detail:'/api/products/'+item.id,
                category:categories.find((element)=>(element.id==item.idCategory)).name
            })),
            
            
        }
        res.json(response);
    },
    detalleProducto:async(req,res)=>{
        const product= await db.Product.findByPk(req.params.id);
        const categories=await db.Category.findAll();
        const brands=await db.Brand.findAll();
        const mascotas=await db.Mascota.findAll();
        const response={
            id:product.id,
            name:product.name,
            price:product.price,
            amount:product.amount,
            description:product.description,
            color:product.color,
            brand:[brands.find((element)=>(element.id==product.idBrand)).name],
            category:[categories.find((element)=>(element.id==product.idCategory)).name],
            mascota:[mascotas.find((element)=>(element.id==product.idMascota)).name],
            urlImagen:'/apiImagen/product/imagen'+product.id
        }
       return  res.json(response);
    },
}

module.exports=productApiController;