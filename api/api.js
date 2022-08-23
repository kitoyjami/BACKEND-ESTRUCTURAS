import express from "express"
import bookRoutes from "./routes/bookRoutes.js"
import clientRoutes from "./routes/clientRoutes.js"
import authRoutes from "./routes/authRoutes.js"

const api = express()

// Todo: configurar Middlewares

api.use(express.json())

api.get("/status", (req, res) => {
    return res.json({
        msg: "API en linea y funcionando"
    })
})

// to do => por hacer
// TODO: Aca se registran las rutas

api.use(authRoutes)
api.use(clientRoutes)
api.use(bookRoutes)


export default api