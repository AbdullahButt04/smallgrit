import express from "express";
import dotenv from "dotenv";

dotenv.config();

const app = express();

const port = process.env.SERVER_PORT;

app.get('/', (req,res) => {
    console.log(req);
    res.send("Hello world");
});

app.listen(port, ()=>{
    console.log(`GRIT is listening on PORT: ${port}`);
});

console.log("hello");
