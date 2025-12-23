import express from "express"
import dotenv from "dotenv"
import path from "path"


const app = express()
dotenv.config()

const _dirname = path.resolve();

//make our app ready for deployment
if(process.env.NODE_ENV === "production"){
    app.use(express.static(path.join(_dirname,"../frontend/dist")))

    app.get("/{*any}",(req,res)=>{
        res.sendFile(path.join(_dirname,"../frontend","dist","index.html"))
    })
}

const port = process.env.PORT || 3000
app.listen(port,()=>{
    console.log(`Server is running on port: ${port}`)
})