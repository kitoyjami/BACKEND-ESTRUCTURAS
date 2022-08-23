import mongoose from "mongoose"

/**
 * Cosas necesarias para crear un modelo
 * 1. schema
 * 2. nombre
 */

const schema = new mongoose.Schema({
    author: {
        type: String,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    genre: String,
    category: String,
    language: String,
    editorial: String,
    printingDate: Date,
    pages: Number,
    isbn: String,
    coverage: String,
})

export default mongoose.model("Book", schema)