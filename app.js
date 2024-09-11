// ---------------import modules -----------------------
import express from "express"
import Connection from "./connection.js"






const app = express()
const PORT=3002
// const path= require("path")

// const bodyParser=require ("body-parser")
// app.use(bodyParser.urlencoded())
// app.use(bodyParser.json())

//to load all pages from the same folder 
// app.use(express.static("pages"))
// app.use(express.urlencoded());


app.get("/hello",(req,res)=>{
    console.log("Router");
    res.send("Hello")

    // -------------------id param---------------------------------------------------------
    //give /hello/:id1/:id2 in get
    //give /hello/20/30 in thunder Client http


    // console.log(req.params);
    // const {id1,id2}=req.params; //destructuring
    // console.log(id1,id2);

    // --------------------------query param----------------------------------------
    //give /hello in get
    //give /hello?name=alan&age=29 in thunder Client http

     console.log(req.query);
    const {name,age}= req.query
    console.log(name,age);
    
    //    -----------------------------------------------------------------------------------
    


    

    
   
    // console.log(__dirname);
    // res.sendFile(path.join(__dirname,"pages","index.html"))  
    
})

// function Token(req,res,next){
//     console.log("Middle ware");
//     next()
    
// }

// app.post("/about",(req,res)=>{
//     console.log(req.body);
//     res.status(201).send("About page")
// })

app.get("*",(req,res)=>{
    res.status(404).send("Invalid")
})


Connection().then(()=>{
    console.log("Database Connected");
    app.listen(PORT,()=>{
        console.log(`Server: http://localhost:${PORT}`);
    })
    
}).catch((error)=>{
    console.log(error);
    
})