import mongoose from "mongoose";
// import { DB_NAME } from "../constants.js";
// import mongoose from "mongoose";/
import { DB_NAME } from "../constants.js";

async function connectDB() {
    try {
        const connectionInstance =await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
        console.log(`\n connection successful ! Hostess : ${connectionInstance.connection.host}`)
    } catch (error) {
        console.error("Database Connection error" , error);
        process.exit(1);
    }
}

export default connectDB;