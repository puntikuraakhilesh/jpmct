const ex=require('express');
const app=ex();


//we have to add the below statement because the server doesnt understand we are passing json format so we have to tell our app what input it is getting
app.use(ex.json())


var obj=[{
    id:"1",
    name:"@khil",
    branch:"CSIT"
},{
    id:"2",
    name:"L0k!",
    branch:"CSIT"
},{
    id:"3",
    name:"s0han",
    branch:"CSIT"
}]
app.get('/api/obj',(req,res)=>{
    res.status(200).json(obj);
})


app.get('/api/obj/:id',(req,res)=>{
    //this prints what we actually have passed in the :id     
    //res.send("Message "+req.params.id);




    //console.log(req.params)
    //O/P:{id:2}

    const x=obj.find(s=>s.id==req.params.id);
    console.log(x);//{ id: '2', name: 'L0k!', branch: 'CSIT' } according to http://localhost:2000/api/obj/2
    if(!x)
        res.status(400).send(`Student with the given is ${req.params.id} does not exist`);
    res.status(200).json(x);

   

});


app.post('/api/obj',(req,res)=>{
    const nn={
        id:req.body.id,
        name:req.body.name,
        branch:req.body.branch
    }


    obj.push(nn);
    res.status(200).json(obj);
    // console.log(req.body);  prints the body
})


app.patch('/api/obj/:id',(req,res)=>{
    //pass the object in the body of postman
    obj.forEach(s=>
        {
            if(s.id==req.params.id){
                s.id=req.body.id;
                s.name=req.body.name;
                s.branch=req.body.branch;

            }
            });
    
    res.status(200).json(obj);
})
app.delete('/api/obj/:id',(req,res)=>{
    const stu=obj.find(s=>s.id==req.params.id)
    var index=obj.indexOf(stu);
    obj.splice(index,1);
    res.status(200).json(obj);
})
app.listen(2000,(err)=>{
    console.log("Server is listening on port 2000");
})