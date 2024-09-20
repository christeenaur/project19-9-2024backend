const mongoose=require("mongoose")
mongoose.connect("mongodb+srv://christeenaur:christeena@cluster0.zsfoi.mongodb.net/smsdatabase?retryWrites=true&w=majority&appName=Cluster0")
.then(()=>{console.log("DB connected")})
.catch(err=>console.log(err));