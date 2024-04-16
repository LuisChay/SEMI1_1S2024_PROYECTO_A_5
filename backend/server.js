const authorRoutes = require('./routes/authorRoutes')
const ratingRoutes = require('./routes/ratingRoutes')
const genreRoutes = require('./routes/genreRoutes')
const userRoutes = require('./routes/userRoutes')
const bookRoutes = require('./routes/bookRoutes')
const connect = require('express-myconnection')
const express = require('express')
const mysql = require('mysql2')
const cors = require('cors')
const app = express()
const logger = require("morgan")

require('dotenv').config();

// ----------- PUERTO -------------- 
app.set('port', process.env.PORT || 9000)

// ----------- BASE DE DATOS -----------
const DBconfig = {
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE
}

app.use(cors())
app.use(connect(mysql, DBconfig, 'single'))
app.use(express.json())
app.use(logger("dev"))
app.use('/', userRoutes)
app.use('/', bookRoutes)
app.use('/', genreRoutes)
app.use('/', ratingRoutes)
app.use('/', authorRoutes)

// ----------- SERVIDOR CORRIENDO -------------- 
app.listen(app.get('port'), ()=>{
    console.log('Servidor corriendo en el puerto: ', app.get('port'))
});