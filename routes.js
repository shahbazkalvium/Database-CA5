const express = require("express")
const User = require('./Schema')
const Task = require('./Schema')

const router = express()

router.post("/AddUser",async(req,res)=>{
    try{
    const {name,email} = req.body;

    if(!name||!email){
        res.status(400).json({message:"All fields are required"})
    }
    const existingUser = await User.findOne(req.body)
    if(existingUser){
        res.status(400).json({message:"User already exists"})
    }
    const newUser = new User({
        name,
        email,
})
    await newUser.save()

    res.status(201).json({message:"User creates successfully"})
    }catch(err){
        console.log(err)
    }
})

router.post("/Newtask",async(req,res)=>{
     try{
        const {userId}= req.body.params;
        const {description,title} = req.body;
        if(!userId){
            res.status(400).json({message:'UserId does not exists'})
        }
        
        const Newtask = new Task(
            title,
            description,
        )

        await Newtask.save()

        res.status(201).json({message:"New task creasted successfully"})
       }catch(err){
         console.log(err)
       }
})

module.exports = router()