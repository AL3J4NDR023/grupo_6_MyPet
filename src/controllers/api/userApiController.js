const db= require('../../database/models');

const userApiController={
    listaUsuarios:async(req,res)=>{
        const users=await db.User.findAll();
        const response={
            
            count:users.length,
            
           
            data: users.map((item)=>(
                {id:item.id,
                name:item.name,
                email:item.email,
                detail:'/api/users/'+item.id
            })),
        }
        res.json(response);
    },
    detalleUsuario:async(req,res)=>{
        const user= await db.User.findByPk(req.params.id);
        const response={
            id:user.id,
            name:user.name,
            lastname:user.lastname,
            email:user.email,
            cellphone:user.cellphone,
            address:user.address,
            urlImagen:'/apiImagen/user/imagen'+user.id
        }
       return  res.json(response);
    },
}

module.exports=userApiController;