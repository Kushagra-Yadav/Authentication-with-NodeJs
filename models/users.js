const mongoose=require("mongoose")

const usersSchema=new mongoose.Schema(
  {
    name:{
      type:String,
      required:true
    },
    email:{
      type:String,
      required:true,
      unique:true
    },
    password:{
      type:String,
      required:true,
      select:false
    },
    createdAt:{
      type:Date,
      default:Date.now
    }
  }
)
const users=new mongoose.model("Users",usersSchema)
module.exports=users;