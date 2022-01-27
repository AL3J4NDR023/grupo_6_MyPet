/*********** REQUIRE EXPRESS ********************** */
const express = require('express'); //requerir express
const app = express(); // asignar la funcion

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



/******************** ROUTES ********************/
const homeRoutes = require('./routes/homeRoutes')
app.use('/',homeRoutes);


/******************** ROUTES productos por ahora********************/
const productsRoutes=require('./routes/productsRoutes')
app.use('/products',productsRoutes);

module.exports=app;

/***************** ERROR 404 - DEJAR AL FINAL DE LAS ROUTES ***************/
app.use((req, res, next) => {
    res.status(404).render('error404')
})