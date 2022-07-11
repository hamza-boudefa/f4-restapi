const express=require('express')
const connectDB = require('./config/connectDB')
const user = require('./modules/usersModules')
require('dotenv').config()

const app=express()
app.use(express.json())

const PORT=8888

connectDB()


app.post('/usersAPI/adduser',async(req,res)=>{
   try {
    const newUser= new user(req.body)
    console.log(newUser)
    const newData= await newUser.save()
    res.json({message:"user added successfully",user:newData})
   } catch (error) {
    res.json({error:message.error})
   }
})

app.get('/usersAPI/getUsers',async(req,res)=>{
    const userslist=await user.find()
    res.json(userslist)
})

app.put('/usersAPI/updateuser/:id',async(req,res)=>{
    
    const update= await user.findByIdAndUpdate(req.params.id,{$set:{...req.body}})
    res.json({message:"user updated successfully", data:update})
})

app.delete('/usersAPI/delete/:id',async(req,res)=>{
    await user.findByIdAndDelete(req.params.id)
    res.json({message:"user tfasakh"})
})

app.listen(PORT,(err)=>err?console.log(err):console.log(`app listning om port ${PORT}`))