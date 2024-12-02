import express from "express";
import dotenv from "dotenv";
import pool from "./db/connection.js";

dotenv.config({path: './env'});

const app = express();

const port = process.env.SERVER_PORT;

app.get('/', (req,res) => {
    console.log(req);
    res.send("Hello world");
});

app.listen(port, ()=>{
    console.log(`GRIT is listening on PORT: ${port}`);
});
let result;
try {
    result = await pool.query("SELECT * FROM users");
} catch (error) {
    console.log(error);
}


console.log(result[0]);
console.log("hello");
