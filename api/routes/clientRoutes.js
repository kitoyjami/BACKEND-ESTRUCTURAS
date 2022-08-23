import express from "express"
 import { getAllClients, getClientById, updateClientById, deleteClientById, createClient } from "../controllers/clientController.js"
const router = express.Router()

/** 
 * TODO: ACA VAN LAS RUTAS DE LIBROS
 */



router.route("/clients")
.get(getAllClients)
.post(createClient)   

router.route("/clients/:id")
.get(getClientById)
.put(updateClientById)
.delete(deleteClientById)

export default router