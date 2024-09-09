const express = require("express")
const app = express()
const PORT=3002
const bodyParser=require ("body-parser")

// app.use(bodyParser.urlencoded())
app.use(bodyParser.json())


app.get("/",(req,res)=>{
    res.send("Hello World")
})

app.post("/about",(req,res)=>{
    console.log(req.body);
    res.status(201).send("About")
  
    
})

app.get("*",(req,res)=>{
    res.status(404).send("Invalid")
})

app.listen(PORT,()=>{
    console.log(`Server starting at http://localhost:${PORT}`);
    
})
