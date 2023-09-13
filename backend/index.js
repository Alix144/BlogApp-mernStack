import express from "express";
import mongoose from "mongoose"; 
import router from "./routes/user-routes.js";
import blogRouter from "./routes/blogs-routes.js";
import cors from 'cors';
import { config } from 'dotenv';
config();

const port = process.env.port;
const app = express();

app.use(cors())
app.use(express.json())

app.use("/api/user", router)
app.use("/api/blog", blogRouter)

mongoose.connect(process.env.MONGO_URI)
.then(() => app.listen(port, () => {
    console.log("Live on port " + port)
})).catch((err) => console.log(err))