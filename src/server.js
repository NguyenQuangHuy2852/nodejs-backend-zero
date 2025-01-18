const express = require('express')
require('dotenv').config();
const webRoutes = require('./routes/web')
const db = require('./config/database')

const app = express()
const port = process.env.PORT || 8080
const hostname = process.env.HOSTNAME || '127.0.0.1'

//import viewEngine
const viewEngine = require('./config/viewEngine')

//config req.body
app.use(express.json()); // Used to parse JSON bodies
app.use(express.urlencoded()); //Parse URL-encoded bodies

//config view engine
viewEngine(app)

//declare routes
app.use('/', webRoutes)

//simple query
// db.query(
//     'select * from Users',
//     function (err, results, fields) {
//         console.log(">>> result = ", results)
//     }
// );

app.listen(port, hostname, () => {
    console.log(`Example app listening on port ${port}`)
})