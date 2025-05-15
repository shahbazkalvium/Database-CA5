const mongoose = require('mongoose')
const connectDB = async(url)=>{
    try{
        await connectDB(url)
        console.log('Database connected Successfully')
    }catch(err){
        console.log(err)
    }
}
module.exports = connectDB()