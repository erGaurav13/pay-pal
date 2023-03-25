const mongoose= require("mongoose");

const TaskSchema=mongoose.Schema({
 email:{type:String, required:true,trim:true},
 title:{type:String, required:true,trim:true },
 desc:{type:String, required:true,trim:true},
 completed:{type:Boolean, required:true,trim:true,default:false}
})

const Tasks=mongoose.model("Task",TaskSchema);
module.exports=Tasks;

