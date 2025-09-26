import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
    productName : {
        type : String,
        required : true,
    },
    description :{
        type : String,
        required : true,

    },
    price : {
        type: Number,
        required : true,
    },
    stockQuantity : {
        type : Number,
        required : true,
    },
    productId : {
        type : Number , 
        required :true,
    },


})

export const Products = mongoose.model('Products' , productSchema)