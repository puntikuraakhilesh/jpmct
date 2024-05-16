const x=()=>{
    console.log("IN x method");
}

function y(arr){
    return "The length is "+arr.length;
}


module.exports.x=x;
module.exports.y=y;