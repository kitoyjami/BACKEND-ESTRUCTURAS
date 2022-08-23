import http from 'http'
import api from './api/api.js'
import database from './api/config/database.js'
import config from './api/config/index.js'

const port = config.server.port
const server = http.createServer(api)


server.on('listening', () => {
    console.log(`Server is running on port ${port} 🍏`)  
})

server.on('error', () => {
    if(err.code === 'EADDRINUSE') {
        console.log(`Elige otro puerto, el puerto ${port} ya está en uso `)
    }
    console.log('Ha ocurrido un error en el servidor 🍎', err)  
})

server.listen(port)
database()