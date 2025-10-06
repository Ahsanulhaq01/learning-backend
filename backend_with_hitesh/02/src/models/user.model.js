import mongoose , {Schema} from 'mongoose';

const userSchema = new mongoose.Schema({
    username : {
        type : String,
        required : true,
        unique : true,
        lowercase : true,
        trim : true,
        index : true,
    },
    email : {
        type : String,
        required : true,
        unique : true,
        lowercase : true,
        trim : true,
    },
    fullname : {
        type : String,
        required : true,
        trim : true,
        index : true,  
    },
    avatar : {
        type : String, //cloudinary url; ! files and video upload and they give me url !
        required : true,
    },
    coverImage : {
        type : String,
    },
    watchHistory : [{
        type : Schema.Types.ObjectId,
        ref : "Video",
    }],
    password : {
        type : String,
        required : [true , "password is required "],

    },
    refreshToken : {
        type : String,
    }
} , {timesstampes : true});

export const User = mongoose.model("User" , userSchema)