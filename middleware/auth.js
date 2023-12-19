const users=require("../models/users")
const jwt=require("jsonwebtoken")
const isAuthenticated=async(req,res,next)=>{
const {token}=req.cookies;
if(token)
{
  const decoded=jwt.verify(token,process.env.JWT_KEY);
  req.user=await users.findById(decoded._id);
  next();
}
else
{
  res.status(404).json({
    message:"Login first"
  })
}
}
module.exports=isAuthenticated;