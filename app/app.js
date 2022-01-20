const express = require('express');
const app = express();
const router = require('./routes')

//Configs
require('dotenv').config();
const port = process.env.PORT || 3000

//Middleware request body type
app.use(express.json())

//Routes
app.use(router)

module.exports = app.listen(port, () => {
    console.log('\x1b[35m%s\x1b[0m', " \n > Blog API - Challenge Warm Up - Enero 2022 - Gabi \n")
    console.log('\x1b[36m%s\x1b[0m', `App working on http://localhost:${port}`);
})