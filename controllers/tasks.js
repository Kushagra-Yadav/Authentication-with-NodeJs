const task=require("../models/tasks");
const newPostPath=async(req,res)=>{
 const newpostCreated=await task.create({title:req.body.title,description:req.body.description,user:req.user._id});
 res.status(201).json({
  message:"Success",
  newPost:newpostCreated
 })
}

const myPostPath=async(req,res)=>{
  const myPosts=await task.find({user:req.user});
  res.status(200).json({
    message:"Found",
    myPosts
  })
}
const udpateTaskPath=async(req,res)=>{
   const toUpdate=await task.findById(req.params.id);
   toUpdate.isCompleted=!toUpdate.isCompleted;
   await toUpdate.save();
   res.status(200).json({
    message:"Success",
    toUpdate
   })
}

const deleteTaskPath=async(req,res)=>{
  const toDelete=await task.findById(req.params.id);
  await task.deleteOne(toDelete);
  res.status(200).json({
    message:"Task deleted succesfully"
  })
}
module.exports={newPostPath,myPostPath,udpateTaskPath,deleteTaskPath};