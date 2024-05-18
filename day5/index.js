const express=require('express');
require('dotenv').config()
const studentRouter=require('./routes/student.routes')
app=express();
const mongoose=require('mongoose');
const port=process.env.porter;
mongoose.connect('mongodb://localhost:27017/studatabase').then(()=>{
    console.log("Connection is successful!!!");
})

app.use(express.json())
app.use(express.urlencoded({extended:true}))


app.use('/api/student',studentRouter);


app.get('/',(req,res)=>{
    res.status(200).json({message:"In home Page"})
})


app.listen(port,()=>{
    console.log("Server is listening in port "+port);
})