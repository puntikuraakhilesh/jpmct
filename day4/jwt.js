const jwt=require('jsonwebtoken');
const ex=require('express')
const app=ex();
const secret="rnd";
app.get('/login',(req,res)=>{
    const user={
        uname:"dfgsfsdfd",
        pass:"cvr"
    }
    
   
    
    jwt.sign({user},secret,{expiresIn:"20s"},(err,token)=>{
        res.status(200).json({token});
    });
})


function verifyJWT(req,res,next){
    // console.log(req.headers); Can pass the required token in Autorization BearerToken or Headers Key:Authorization Value:Bearer <token>
    // console.log(req.headers.authorization); Bearer <token>
    token=req.headers.authorization.split(' ')[1];
    req.token=token;

    next();
}

app.get('/profile',verifyJWT,(req,res)=>{
    console.log(req.token);
    jwt.verify(req.token,secret,(err,data)=>{
        if(!err){
            // Unauthorized
            res.status(200).json({message:"Profile Accessed"});
            
        } else {    
            // Authorized
            res.status(401).json({message:"YOU ARE NOT AUTHORIZED!!!!"});
        }
    });
});




app.listen(2000,(req,res)=>{
    console.log("Server is listening in 2000");
})