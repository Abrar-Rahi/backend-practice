const express = require('express')
const cors = require('cors')
const mongodb = require('./dbConfig/mongoConfig')
const { createAnimalController } = require('./controller/authController')
const checker = require('./middleWire/headersMiddleWire')
const app = express()


app.use(express.json())
app.use(cors())
// database connection
    mongodb()
// database connection

app.post('/animal',checker,createAnimalController)

app.listen(8000,()=>{
    console.log("port connected")
})