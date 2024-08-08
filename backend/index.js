import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./utils/db.js";
dotenv.config({})
const app = express();


//MiddleWare
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cookieParser())
const corsOptions = {
    origin: 'http//localhost:5173',
    credentails:true
}
app.use(cors(corsOptions))

const PORT = process.env.PORT || 3000
app.listen(PORT, () => {
    connectDB()
    console.log(`server running ar port ${PORT}`)
})