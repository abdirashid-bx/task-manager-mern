import e from "express";
import mongoose from "mongoose"
import Task from "./model/model.js";
import router from "./router/route.js";
import cors from "cors"
const port=3000
const app=e()
const url = "mongodb://127.0.0.1:27017/crud";

app.use(cors())
mongoose
  .connect(url)
  .then(() => console.log("✅ MongoDB connected"))
  .catch((err) => console.error("❌ Connection error:", err));

app.listen(port,()=>{
    console.log("the port is working",port)
})
//middlewear
app.use(e.json())
app.use(e.urlencoded({extended:true}))

app.use("/api",router)

 