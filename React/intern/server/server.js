import  Express  from "express";
import Mysql  from "mysql";
import cors from 'cors';
import  Jwt  from "jsonwebtoken";
import bcrypt from 'bcrypt';
import cookieParser from "cookie-parser";
const app =Express();
app.use(Express.json());
app.use(cors());
app.use(cookieParser());

const db =Mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"1234",
    database:"signup",
})
app.listen(8081,()=>{
    console.log("runninng..");
})


