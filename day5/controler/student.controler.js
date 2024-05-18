const studentModel=require('../model/student.model');




async function getAllStudents(req,res){
    const student=await studentModel.find({})
    res.status(200).json(student);
}




async function getCertainStudent(req,res){
    const {id}=req.params
    const stu=await studentModel.findById(id);
    if(!stu)
        res.status(400).json({message:`There is no student with id:${id} `});
    else
        res.status(200).json(stu);   
}


async function editStudent(req,res){
    const {id}=req.params;
    const stu=await studentModel.findByIdAndUpdate(id,req.body,{new:true})//new attribute is set to true because it is updated in the database but to reflect the response of the updated we have to set it to true
    if(!stu)
        res.status(404).json({message:`No student with id:${id}`});
    else
    res.status(200).json(stu);
}


async function addStudent(req,res){
    try
    {const student=await studentModel.create(req.body)
    res.status(200).json(student);
    }
    catch(err)
    {
        console.log(err);
    }
}


async function deleteStudent(req,res){
    const id=req.params.id;
    const stu=await studentModel.findByIdAndDelete(id)
    if(!stu){
        res.status(400).json({message:`No student with id ${id}`});
    }
    else{
        res.status(200).json(stu);
    }
}


module.exports={getAllStudents,getCertainStudent,editStudent,addStudent,deleteStudent};