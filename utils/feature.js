const jwt=require("jsonwebtoken")
const sendCookies=async(user,res,message,statusCode=200)=>{
const token=jwt.sign({_id:user._id},process.env.JWT_KEY);
res.status(statusCode).cookie("token",token,{
  httpOnly:true,
  expires:new Date(Date.now()+60*1000)
 }).json({
  message
})

}
module.exports=sendCookies;