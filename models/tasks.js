const mongoose=require("mongoose")

const taskSchema=new mongoose.Schema({
  title:{
    type:String,
    required:true
  },
  description:{
    type:String,
    required:true
  },
  isCompleted:{
    type:Boolean,
    default:false
  },
  user:{
    type:mongoose.Schema.Types.ObjectId,
    ref:"Users",
    required:true
  },
  createdAt:{
    type:Date,
    default:Date.now
  }
})
const tasks=new mongoose.model("Tasks",taskSchema);
module.exports=tasks;