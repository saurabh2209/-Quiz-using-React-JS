var express=require("express")
var app=express()
app.use(express.static(__dirname+"/public"))


// express listens to request and starts server
app.listen(process.env.PORT,process.env.IP,function(){
    
 console.log("server started")   
}
)