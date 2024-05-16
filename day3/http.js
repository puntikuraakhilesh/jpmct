var http=require('http');
const port=5000;

var server=http.createServer((req,res)=>{
    res.write("Hey");
    res.end();
})
server.listen(port,(err)=>{
    if(err){
        console.log(err);
    }
    console.log("Listening on port "+port);
})