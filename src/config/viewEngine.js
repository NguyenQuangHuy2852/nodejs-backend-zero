//import path, express
const path = require('path')
const express = require('express')

//config view engine
const viewEngine = (app) => {
    app.set('views', path.join('./src', 'views'))
    app.set('view engine', 'ejs');
    app.use(express.static(path.join('./src', 'public')))
}

//export viewEngine
module.exports = viewEngine