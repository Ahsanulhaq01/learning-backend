import { app } from "./app.js";
import dotenv from 'dotenv';
import connectDB from "./db/index.js";
dotenv.config({ path : '../.env'});


connectDB().then(()=>{
    app.on('error' , (error)=>{
        console.log('Error' , error)
    });
    app.listen(process.env.PORT || 4000) , ()=>{
        console.log(`server is running at port ${process.env.PORT}`)
    };
}).catch((error)=>{
    console.log('mongo db is getting error while connecting to db !');
})



//####################2nd way of connecting mongodb

/*
    import mongoose from 'mongoose';
    import { DB_NAME } from './constants.js';
    import express from 'express';
    const app =express();


        ;(async()=>{
            try {
                await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
            app.on('error' , ()=>{
                console.log('error while getting connection')
            })
            app.listen(process.env.PORT , ()=>{
                console.log(`server is listening on ${process.env.PORT}`)
            })
            console.log("successful connection ! ")
            } catch (error) {
                console.log(`ERROR !`  , error)
            }
            
        })();

*/

