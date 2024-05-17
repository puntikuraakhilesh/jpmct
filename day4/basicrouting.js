const http=require('http');
const fs=require('fs');

var server=http.createServer((req,res)=>{
    if(req.url=='/boss'){
        res.writeHead(200);
        fs.createReadStream(__dirname+'/dum.html','utf8').pipe(res);

        //no need of res.end() because pipe(res) automatically calls it 
    }
})


server.listen(2000,(err)=>{
    console.log("server is listening on port 2000");
})