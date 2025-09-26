import mongoose from 'mongoose';

const userSchema = new mongoose.Schema(
    {
        name : {
            type : String,
            required : true,
            lowercase : true,
            unique : true,
        },
        email  :{
            type : String,
            required : true,
            unique : true,
        },
        address : {
            type : String,
            required : true,
        },
        phoneNumber : {
            type : Number,
            required : true,
            unique : true,
        }
    } ,{timestamps : true});

export const User = mongoose.model('User' , userSchema)