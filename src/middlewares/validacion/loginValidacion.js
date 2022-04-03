const { check } = require('express-validator');

module.exports=[
    check('email')
    .isEmail()
    .notEmpty()
    .withMessage('Debes ingresar un Email valido'),

    check('password')
    .notEmpty()
    .withMessage('Digitar la contraseña')
]