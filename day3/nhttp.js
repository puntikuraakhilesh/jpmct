var http=require('http');
var fs=require('fs');


var stu=[
    {id:"01",name:"AKhilesh",branch:"CSIT"},
    {id:"02",name:"Sohan",branch:"CSE"},
    {id:"03",name:"Lokesh",branch:"DS"}
]


var server=http.createServer((req,res)=>{
    if(req.url=='/'){
        res.write("On Home Page");
        res.end();
        
    }
    else if(req.url=='/students'){
        res.write(JSON.stringify(stu));
        res.end();
    }
    else if(req.url=='/index.html'){
        fs.readFile(__dirname+"/index.html",'utf8',(err,data)=>{
            res.write(data);
            res.end();
        })
        
    }
    
})



server.listen(5000);
console.log("Server is listening on 5000");