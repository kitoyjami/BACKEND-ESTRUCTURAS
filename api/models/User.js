import mongoose from "mongoose"

/**
 * Cosas necesarias para crear un modelo
 * 1. schema
 * 2. nombre
 */

const schema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique:true
    },
    password:{
        type: String,
        required: true
    } ,
    name: {
        type: String,
        required: true
    }
})



export default mongoose.model("User", schema)