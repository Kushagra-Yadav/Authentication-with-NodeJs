const express = require("express");
const users=require("../models/users")
const jwt=require("jsonwebtoken")
const bcrypt=require("bcrypt");
const sendCookies = require("../utils/feature");


const getAllUserPath=async(req,res)=>{
  const allUser=await users.find();
  res.status(200).json({
    message:"All users found",
    Users:allUser
  })
}

const loginUserPath=async(req,res)=>{
  const userEmailFound=await users.findOne({email:req.body.email}).select("+password");
  if(!userEmailFound)
  {
   return res.status(404).json({
      message:"First Register to login"
    })
  }
  const isMatched=await bcrypt.compare(req.body.password,userEmailFound.password);
  //console.log(isMatched);
  if(isMatched)
  {
    let {token}=req.cookies;

    if(token){
     return res.status(200).json({
       message:"Already logged in"
     })
    }
    else
   {
    req.user=userEmailFound._id;
    sendCookies(userEmailFound,res,"Login Successfull",200);
   }
      
  }
  else
  {
    res.status(404).json({
      message:"Password is incorrect"
    })
  }
}

const registerUSerPath=async(req,res)=>{
  //console.log(req.body.email);
   const userExist=await users.findOne({email:req.body.email});
   if(userExist)
   {
    return res.status(401).json({
      message:"user already exists"
    })
   }
   else{
    const hashedPassword= await bcrypt.hash(req.body.password,10);
    const createdUser=await users.create({
      name:req.body.name,
      email:req.body.email,
      password:hashedPassword
    })
    sendCookies(createdUser,res,"Created Successfully",201);
   }
}
const logoutPath=async(req,res)=>{
  res.status(200).cookie("token","",{expires:new Date(Date.now())}).json({
    message:"Succcesfully logout"
  })
}
const myProfilePath=async(req,res)=>{
    res.status(200).json({
      user:req.user
    })
  
}

module.exports={getAllUserPath,loginUserPath,registerUSerPath,myProfilePath,logoutPath};
