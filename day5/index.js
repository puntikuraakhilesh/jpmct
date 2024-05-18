require('dotenv').config()
const port=process.env.porter;
const express=require('express');
app=express();


const mongoose=require('mongoose');
mongoose.connect('mongodb://localhost:27017/studatabase').then(()=>{
    console.log("Connection is successful!!!");
})


app.use(express.json())
app.use(express.urlencoded({extended:true}))

const studentRouter=require('./routes/student.routes')

app.use('/api/student',studentRouter);


app.get('/',(req,res)=>{
    res.status(200).json({message:"In home Page"})
})


app.listen(port,()=>{
    console.log("Server is listening in port "+port);
})