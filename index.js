const express = require('express')
const dotenv = require('dotenv')
const connectDB = require('./db')
const router = require('./routes')
const cors = require('cors')

dotenv.config()

const app = express()

app.use(express.json())
app.use(cors())

app.use("routes",router)

const PORT = process.env.PORT || 5000;
const url = process.env.MONGODB_URI

app.get("/",(req,res)=>{
    res.json("Hello world")
})

app.listen(PORT,async()=>{
    try{
        await connectDB(url)
        console.log(`Server is running on ${PORT}`)
    }catch(err){
        console.log(err)
    }
} )