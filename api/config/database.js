import mongoose from "mongoose"
import config from "./index.js"

const db = mongoose.connection

db.on('connecting', () => {
    console.log('Connecting to MongoDB... 📙')     
})

db.on('connected', () => {
    console.log('Se ha conectado a la base de datos... 🍏')  
})

db.on('error', () => {
    console.log('Error en la conexion... 🍎')    
})

export default () => {
    mongoose.connect(config.database.uri)
}
