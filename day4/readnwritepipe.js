const express=require('express');
const fs=require('fs');
const app=express();
app.get('/',(req,res)=>{
    var myReadStream=fs.createReadStream(__dirname+'/read.txt');
    var myWriteStream=fs.createWriteStream(__dirname+'/writepipe.txt');
    myReadStream.pipe(myWriteStream);

})

app.listen(2000,()=>{
    console.log("server is listing on port 2000");
})