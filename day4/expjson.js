const ex=require('express');
const app=ex();
var obj=[{
    id:"1",
    name:"Akhilesh",
    branch:"CSIT"
},{
    id:"1",
    name:"Akhilesh",
    branch:"CSIT"
},{
    id:"1",
    name:"Akhilesh",
    branch:"CSIT"
}]
app.get('/api/data',(req,res)=>{
    res.json(obj);
})


app.listen(2000,(err)=>{
    console.log("Server is listening on port 2000");
})