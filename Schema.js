const mongoose = require('mongoose')
const { ref } = require('process')
const UserSchema = new mongoose.Schema(
    {
        name:{
            type:String,
            required:true,
            minLength:[3,"name should be atleast 3 characters"],
        },
        email:{
            type:String,
            required:true,
            unique:true,
            format:["email should be a valid format"]
        }
    }
)
const TaskSchema = new mongoose.Schema(
    {
        title:{
            type:String,
            required:true,
        },
        description:{
            type:String,
            required:true,
            minLength:[10,"Description should be atleast 10 characaters"],
        },
        dueDate:{
            type:Date,
            required:true,
        },
        status:{
            type:String,
            enum:['Pending','Completed'],
            default:'pending',
        },
        userId:{
            type:Number,
            ref:"User",
            required:true,
        }
    }
)
const User = mongoose.model("User",UserSchema)
const Task = mongoose.model("Task",TaskSchema)
module.exports = {User,Task}