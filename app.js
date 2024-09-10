const express = require("express")
const app = express()
const PORT=3002
const path= require("path")

// const bodyParser=require ("body-parser")
// app.use(bodyParser.urlencoded())
// app.use(bodyParser.json())

//to load all pages from the same folder 
// app.use(express.static("pages"))
// app.use(express.urlencoded());


app.get("/",Token,(req,res)=>{
    console.log("Router");
    res.send("Hello")
    // console.log(__dirname);
    // res.sendFile(path.join(__dirname,"pages","index.html"))  
    
})

function Token(req,res,next){
    console.log("Middle ware");
    next()
    
}

// app.post("/about",(req,res)=>{
//     console.log(req.body);
//     res.status(201).send("About page")
// })

app.get("*",(req,res)=>{
    res.status(404).send("Invalid")
})

app.listen(PORT,()=>{
    console.log(`Server starting at http://localhost:${PORT}`);
    
})
