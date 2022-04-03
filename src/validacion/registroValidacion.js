const { check, body}= require('express-validator');
const db= require('../database/models')

module.exports =[
    check('name').notEmpty().withMessage('Ingresa el nombre'),
    check('lastname').notEmpty().withMessage('Ingresa el apellido'),
    check('email').notEmpty().isEmail().withMessage('Ingresa un Email'),
    check('cellphone').notEmpty().isNumeric().withMessage('Ingres un numero celular'),

    body('email').custom(async(valor)=>{
        user= await db.User.findOne({
            where:{email:valor}
        }) 
        if(user){
            return "Email ya registrado"
        }
    }),

    check('password').isLength({
        min:5,
        max:11
    }).withMessage('La contraseña debe tener entre 6 y 11 caracteres'),

    body('passwordConfirm').custom((valor,{req})=> valor != req.body.pass ? false: true)
    .withMessage('Las contraseñas no coinciden')



]   