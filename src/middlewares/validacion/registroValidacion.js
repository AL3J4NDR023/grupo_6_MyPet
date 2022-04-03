const { check, body}= require('express-validator');
const db= require('../../database/models')
const path = require('path');

module.exports =[
    check('name').notEmpty().withMessage('Debes ingresar un nombre'),
    check('lastname').notEmpty().withMessage('Debes ingresar un apellido'),
    check('email').notEmpty().withMessage('Debes ingresar un Email').bail().isEmail().withMessage('Ingresa un Email valido'),
    check('cellphone').notEmpty().withMessage('Debes ingresar un numero de celular'),
    check('password').isLength({
        min:6,
        max:11
    }).withMessage('La contraseña debe tener entre 6 y 11 caracteres'),
    check('address').notEmpty().withMessage('Debes de ingresar una dirección'),
    body('passwordConfirm').custom((valor,{req})=> valor != req.body.password ? false: true)
    .withMessage('Las contraseñas no coinciden'),
    body('email').custom(async(valor,{req})=>{
        user= await db.User.findOne({
             where:{email:req.body.email}
         }) 
        if(user){
            throw new Error('Este Email ya esta registrado')
            }
      return true;      
    }),
    body('fileUser').custom((valor,{req})=>{
        const file= req.file;
        
        const extensions=['.jpg','.png','.git'];
        if(!file){
            throw new Error('Debes subir una imagen');
        }else{
            const fileExtension=path.extname(file.originalname);
            console.log(fileExtension);
            if(!extensions.includes(fileExtension)){
                throw new Error('solo se aceptan formatos: '+extensions.join(', '));
            }
        }
        return true

    })



]   