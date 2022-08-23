import express from "express"
import { createBook, deleteBookById, getAllBooks, getBookById, updateBookById } from "../controllers/bookController.js"
import createBookValidator from "../middlewares/createBookValidator.js"
const router = express.Router()

/** 
 * TODO: ACA VAN LAS RUTAS DE LIBROS
 */



router.route("/books")
.get(getAllBooks)
.post(createBookValidator,createBook)   

router.route("/books/:id")
.get(getBookById)
.put(updateBookById)
.delete(deleteBookById)

export default router