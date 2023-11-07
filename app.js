"use strict";
/* -------------------------------------------------------*/

const express = require("express");
const app = express();

require("dotenv").config();
const PORT = process.env.PORT || 8000;


/* ------------------------------------------------------- */
//TEMPLATE  (npm i ejs)
app.set('view engine', 'ejs')                               //---> view engine olarak 3 seçeneğim var ejs kullanacaksın diyorum
// Default folder: './views'
app.set('views', './public')                                //---> çalışacağım dosyayı public içnde ara dedim


/* ------------------------------------------------------- */
// Accept json data & convert to object:
app.use(express.json())

// Router:
app.all('/', (req, res) => {                                //---> anasayfayı template e devrettim
    res.render('index.ejs' )                                //---> ilk string hangi ejs dosyasını çalıştırcaksam o 
})

app.use('/view', require('./app/routes/todoTemplate'))  
app.use('/api', require('./app/routes/todo'))               //---> api ile ilgili yapacağım ne varsa route'u yönlendirdim


// DatabaseConnection:
const { dbConnection } = require('./app/dbConnection')
dbConnection() // sequelize.sync() must run after model defines.

// errorHandler (Catch Errors):
app.use(require('./app/errorHandler'))

/* ------------------------------------------------------- */
app.listen(PORT, () => console.log("Running: http://127.0.0.1:" + PORT));