import { app } from "./app.js";
import dotenv from 'dotenv';
import connectDB from "./db/index.js";
dotenv.config({ path : '../.env'});

connectDB().then(()=>{
    app.listen(process.env.PORT || 4000) , ()=>{
        console.log(`server is running at port ${process.env.PORT}`)
    };
    app.on('error' , (error)=>{
        console.log('Error' , error)
    });
}).catch((error)=>{
    console.log('mongo db is getting error while connecting to db !');
})