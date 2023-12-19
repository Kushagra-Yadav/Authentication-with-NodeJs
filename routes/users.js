const express = require("express");
const {logoutPath,myProfilePath,getAllUserPath,loginUserPath,registerUSerPath}=require("../controllers/users");
const isAuthenticated = require("../middleware/auth");
const router=express.Router();


router.get("/api/v1/all",getAllUserPath);

router.post("/api/v1/login",loginUserPath);

router.post("/api/v1/register",registerUSerPath);

router.get("/api/v1/logout",isAuthenticated,logoutPath);
router.get("/api/v1/user/myprofile",isAuthenticated,myProfilePath);

module.exports=router;