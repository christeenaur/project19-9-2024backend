const express=require("express")
const cors=require("cors")

const Database =require("./Connection/Database");
const Loginroute = require('./routes/Loginroute');

//initializing
const app = new express();

app.use(express.urlencoded({extended:true}))
app.use(express.json());
app.use(cors());

app.get('/',(request,response)=>{
    response.send("hi")
})
// app.use("/loginview",Loginroute);

app.post ('/loginview',async (request,response)=>{
    const{ username,password}= request.body;
    console.log(request.body)
    try{
        const user =await loginmodel.findOne({username,password});
        if(user){
            response.json({success:true,message:'Login successful'});
                }
                else{
                    response.json({success:false,message:'Invalid password and username'});

                }
            }catch(error){
                    response.status(500).json({success:false,message:'Error during login'});
                
    }
});

//port
app.listen(4005,(request,response)=>{
    console.log("server is running on port 4005");
});