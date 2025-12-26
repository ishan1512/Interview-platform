import express from "express"
import dotenv from "dotenv"
import path from "path"
import { connectDb } from "./utils/db.js"


const app = express()
dotenv.config({quiet:true})

const _dirname = path.resolve();

//make our app ready for deployment
if(process.env.NODE_ENV === "production"){
    app.use(express.static(path.join(_dirname,"../frontend/dist")))

    app.get("/{*any}",(req,res)=>{
        res.sendFile(path.join(_dirname,"../frontend","dist","index.html"))
    })
}

const port = process.env.PORT || 3000
// app.listen(port,()=>{
//     connectDb()
//     console.log(`Server is running on port: ${port}`)
// })

const startServer = async()=>{
    try {
        await connectDb()
        app.listen(port,()=> console.log(`Server is running on port: ${port}`))
    } catch (error) {
        console.log("Error staring the server", error)
    }
}
startServer()