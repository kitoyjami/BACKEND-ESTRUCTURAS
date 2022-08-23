import Book from "../models/Book.js"

const createBook = async( req, res) => {
   
    try {
        const newBook = await Book.create(req.body)
        return res.json({
            msg: "Libro creado con exito",
            book: newBook
        })

    } catch (error) {
        return res.status(500).json({
            msg: "Error al crear el libro",
            error
        })
    }
   
   
}

const getAllBooks = async(req, res) => {

    try {
        const books = await Book.find()
        return res.json({
            msg: "Libros encontrados",
            data : books
        })
    } catch (error) {
        return res.status(500).json({
            msg: "Error al obtener los libros",
            data:  error
        })
    }

}


const getBookById = async (req, res) => {
    try{
        const { id }  = req.params
        const book = await Book.findById(id)
        return res.json({
            msg: "Libro encontrado",
            data: { book }
        })
    } catch (error) {
        return res.status(500).json({
            msg: "Error al obtener el libro",
            data: error
        })
    }
}

const updateBookById = async (req, res) => {
    try{
        const {id} = req.params
        const actual = req.body
        const book = await Book.findByIdAndUpdate(id, actual, {new: true})    
        return res.json({
            msg: "Libro actualizado",
            data: { book }
        })
    } catch (error) {
        return res.status(500).json({
            msg: "Error al actualizar el libro",
            data: error
        })
    }

}

const deleteBookById = async (req, res) => {
    try{
        const {id} = req.params
        const book = await Book.findByIdAndDelete(id)
        return res.json({
            msg: "Libro eliminado",
            data: { book }
        })

    }catch (error) {
        return res.status(500).json({
            msg: "Error al eliminar el libro",
            data: error
        })
    }

}

export { getAllBooks, createBook, getBookById, updateBookById, deleteBookById }