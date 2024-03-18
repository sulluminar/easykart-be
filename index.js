require('dotenv') .config()
const express=require('express')
const cors = require('cors')
const cartServer = express()
const routes= require('./Routes/router')

cartServer.use(cors());
require('./DB/connections')
cartServer.use(express.json());
cartServer.use(routes)
const PORT = 3000
cartServer.listen(PORT,()=>{
    console.log("Cart server is running in port 3000")
})