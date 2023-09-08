import express from "express";
const port = 4000;
const app = express();

app.use("/home", (req, res) => {
    res.send("hello world")
})

app.listen(port, () => {
    console.log("Live on port " + port)
})