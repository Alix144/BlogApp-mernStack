import express from "express";
import mongoose from "mongoose"; 
import router from "./routes/user-routes";

const port = 4000;
const app = express();

app.use(express.json())

app.use("/api/user", router)


mongoose.connect("mongodb+srv://ali:DuW8ByeaV8xZ967n@cluster0.qcyx9mh.mongodb.net/Blog?retryWrites=true&w=majority")
.then(() => app.listen(port, () => {
    console.log("Live on port " + port)
})).catch((err) => console.log(err))