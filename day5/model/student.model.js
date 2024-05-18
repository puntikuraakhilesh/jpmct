const mongoose=require('mongoose');
const studentSchema=mongoose.Schema({
    _id:Number,
    name:String,
    branch:String
})

const studentModel=mongoose.model("stutable",studentSchema);
module.exports=studentModel;