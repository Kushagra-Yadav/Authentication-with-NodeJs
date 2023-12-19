const express=require("express");
const connectDB=require("./data/database")
const router=require("./routes/users")
const Taskrouter=require("./routes/task")

const cookieParser=require("cookie-parser")
const app=express();
connectDB();
app.use(cookieParser());
app.use(express.json());
app.use(router);
app.use(Taskrouter);
app.listen(process.env.PORT,()=>{console.log("Server listening")});