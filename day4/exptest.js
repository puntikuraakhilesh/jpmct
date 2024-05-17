const ex=require('express')
const app=ex();
app.get('/',(req,res)=>{
    res.send("Home Page");
})
app.get('/client',(req,res)=>{
    res.send("this is client page");
})


app.get('/dum.html',(req,res)=>{
    console.log(req.url);
    res.sendFile(__dirname+'/dum.html');
})
app.listen(2000,()=>{
    console.log("server is listing on port 2000");
})