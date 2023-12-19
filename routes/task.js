const express=require("express");
const isAuthenticated =require("../middleware/auth")
const {newPostPath,myPostPath,udpateTaskPath,deleteTaskPath} =require("../controllers/tasks")
const router=express.Router();

router.post("/api/v1/user/newpost",isAuthenticated,newPostPath);

router.get("/api/v1/user/mytask",isAuthenticated,myPostPath);

router.route("/api/v1/user/:id").put(udpateTaskPath).delete(deleteTaskPath);
module.exports=router;