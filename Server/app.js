import { connectMongoDB } from "./connect/connection.js";
import express from "express";
import dotenv from "dotenv";
import cors from 'cors'
import Register from './routes/Register.js'
import JobsTable from './routes/JobsTable.js'

const app = express()
dotenv.config()
app.use(cors());
app.use(express.json());


app.use('/register', Register)
app.use('/addjobs',JobsTable)

app.listen(process.env.PORT, () => {
    connectMongoDB();
    console.log(`Server running on port :  http://localhost:${process.env.PORT}`);
  });
  