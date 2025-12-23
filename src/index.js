
import dotenv from "dotenv"
import connectDB from "./db/index.js";


// 2nd approach => fro 2nd approcah make anothe index in in DB folder om=nly import it here

dotenv.config({
    path: './env'
})


connectDB();





/* First approach to connect database using try catch
import mongoose from 'mongoose';
import { DB_NAME, DB_name } from "./constants";

import express from "express"
const app = express()

( async () => {
    try {
      await  mongoose.coonect(`${process.env.MONGODB_URL} 
        / ${DB_NAME}`)
        app.on("error", (error) => {
            console.log("ERRor:", error);
            throw error
        })

        app.listen(process.env.PORT, () => {
            console.log(`App is listening on port $ 
                {process.env.PORT}`);
        })
    }
    catch (error) {
        console.error("Error:",error)
        throw err
    }
})()
    */
