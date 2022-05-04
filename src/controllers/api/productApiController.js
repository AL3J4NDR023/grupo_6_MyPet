
const db= require('../../database/models');
const productApiController={
    list: async (req, res) =>{
        try{
            const products = await db.Product.findAll();
            const response={
                meta:{
                    status: 200,
                    total:products.length,
                    url:'api/products'
                },
                data: products
                
            }
            return res.json(response);
        } catch(error){
            return res.json({error})
        } 
       
    },
    detail:async(req,res)=>{
        try {
        const product= await db.Product.findByPk(req.params.id);
        const response={
            meta: {
                status: 200,
                total:1,
                url:'api/products/:id'
            },
            data:product
        }
       return  res.json(response);
    } catch (error) {
        return res.json({ error});
    }

    },
    create: async (req, res)=>{
        
        console.log(req.body.name);
      console.log(req.body.price);
        try {
        const {name,price, amount,discount,idMascota,idCategory,description}=req.body;
        const confirm = await db.Product.create({
                name,
                price,
                amount,
                discount,
                category,
                description,
                idMascota,
                idCategory
          });
          const response={
            meta: {
                status: 200,
                total:1,
                url:'api/products/create'
            },
            data:confirm
        }
       return  res.json(response);
        } catch (error) {
            return res.json({ error});
        }
    }
}

module.exports = productApiController;