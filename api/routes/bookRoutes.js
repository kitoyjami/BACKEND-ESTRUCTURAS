import express from "express"
import { createBook, deleteBookById, getAllBooks, getBookById, updateBookById } from "../controllers/bookController.js"
import createBookValidator from "../middlewares/createBookValidator.js"
import isAuth from "../middlewares/authValidator.js"


const router = express.Router()

/** 
 * TODO: ACA VAN LAS RUTAS DE LIBROS
 */

router.use('/books',isAuth)

router.route("/books")
.get(getAllBooks)
.post(createBookValidator,createBook)   

router.route("/books/:id")
.get(getBookById)
.put(updateBookById)
.delete(deleteBookById)

export default router