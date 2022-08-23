import Client from "../models/Client.js"

const createClient = async( req, res) => {
   
    try {
        const newClient = await Client.create(req.body)
        return res.json({
            msg: "Cliente creado con exito",
            client: newClient
        })

    } catch (error) {
        return res.status(500).json({
            msg: "Error al crear el cliente",
            data: error
        })
    }
   
   
}

const getAllClients = async(req, res) => {
    try{
        const clients = await Client.find()
        return res.json({
            msg: "Clientes obtenidos con exito",
            data: clients
        })

    } catch (error) {
        return res.status(500).json({
            msg: "Error al obtener los clientes",
            data: error
        })
    }
}


const getClientById = async (req, res) => {
    try{
        const client = await Client.findById(req.params.id)
        return res.json({
            msg: "Cliente obtenido con exito",
            data: client
        })

    } catch (error) {
        return res.status(500).json({
            msg: "Error al obtener el cliente",
            data: error
        })
    }
}

const updateClientById = async (req, res) => {
    try{
        const client = await Client.findByIdAndUpdate(req.params.id, req.body, {new: true})
        return res.json({
            msg: "Cliente actualizado con exito",
            data: client
        })
    } catch (error) {
        return res.status(500).json({
            msg: "Error al actualizar el cliente",
            data: error
        })
    }
}

const deleteClientById = async (req, res) => {
    try{
        const client = await Client.findByIdAndDelete(req.params.id)
        return res.json({
            msg: "Cliente eliminado con exito",
            data: client
        })
    } catch (error) {
        return res.status(500).json({
            msg: "Error al eliminar el cliente",
            data: error
        })
    }
}

export { getAllClients, getClientById, updateClientById, deleteClientById, createClient }