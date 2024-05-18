const express=require('express')
const routes=express.Router()
const studentModel=require('../model/student.model')


routes.use(express.json())
routes.use(express.urlencoded({extended:true}))

routes.get('/',async(req,res)=>{
    const student=await studentModel.find({})
    res.status(200).json(student);
})


routes.get('/:id',async(req,res)=>{
    const {id}=req.params
    const stu=await studentModel.findById(id);
    if(!stu)
        res.status(400).json({message:`There is no student with id:${id} `});
    else
        res.status(200).json(stu);
    
})



routes.put('/:id',async(req,res)=>{
    const {id}=req.params;
    const stu=await studentModel.findByIdAndUpdate(id,req.body,{new:true})
    if(!stu)
        res.status(404).json({message:`No student with id:${id}`});
    else
    res.status(200).json(stu);
})

routes.delete('/:id',async(req,res)=>{
    const id=req.params.id;
    const stu=await studentModel.findByIdAndDelete(id)
    if(!stu){
        res.status(400).json({message:`No student with id ${id}`});
    }
    else{
        res.status(200).json(stu);
    }
})


routes.post('/',async(req,res)=>{
    try
    {const student=await studentModel.create(
    req.body
    )



    res.status(200).json(student);}
    catch(err){
        console.log(err);
    }
})





module.exports=routes;