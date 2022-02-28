/*********** REQUIRE EXPRESS ********************** */
const express = require('express'); //requerir express
const session = require('express-session');
const app = express(); // asignar la funcion


app.use(session({
	secret: "Shhh, It's a secret",
	resave: false,
	saveUninitialized: false,
}));

/******** PATCH ********************** */
const path = require('path'); // funcion

/******************** RECURSOS ESTATICOS (PUBLIC) *******************/
const publicPath = path.join(__dirname, '../public')// resolver ruta
app.use(express.static(publicPath)); //traer los elementos public - recursos estaticos

/**************************LISTEN PORT ***************************** */
app.listen(3001,()=>{  //correr servidor
    console.log("Server Run")
})

/*********************** EJS****************************** */
app.set('view engine', 'ejs')// template engine - EJS
app.set('views', 'src/views')// template engine - EJS

//captura informacion metodo post
app.use(express.urlencoded({extended:false}));
app.use(express.json());

/** metodo para PUT AND DELETE 
 *  npm install method-override --save // TOCA INSTALAR
*/

const methodOverride = require('method-override');
app.use(methodOverride('_method'));

/******************** ROUTES ********************/
const homeRoutes = require('./routes/homeRoutes')
app.use('/',homeRoutes);


/******************** ROUTES productos por ahora********************/
const productsRoutes=require('./routes/productsRoutes')
app.use('/products',productsRoutes);

/******************** ROUTES usuarios por ahora********************/
const userRoutes=require('./routes/userRoutes')
app.use('/users',userRoutes);


/***************** ERROR 404 - DEJAR AL FINAL DE LAS ROUTES ***************/
//app.use((req, res, next) => {res.status(404).render('error404')})

module.exports=app;