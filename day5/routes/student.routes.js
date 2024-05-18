const express=require('express')
const routes=express.Router()
const studentModel=require('../model/student.model')
const {getAllStudents,getCertainStudent,editStudent,addStudent,deleteStudent}=require('../controler/student.controler')



routes.use(express.json())
routes.use(express.urlencoded({extended:true}))




routes.get('/',getAllStudents)

routes.get('/:id',getCertainStudent)

routes.put('/:id',editStudent)

routes.delete('/:id',deleteStudent)

routes.post('/',addStudent)


module.exports=routes;