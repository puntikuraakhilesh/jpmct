const fs=require('fs');
fs.readFile("writen.txt",'utf8',(err,data)=>{
    if(err){
        console.log(err);
    }
    else{

        fs.writeFile("newwriten.txt",data,(err)=>{
            if(err){
                console.log(err);
            }
     
        })
    }
})