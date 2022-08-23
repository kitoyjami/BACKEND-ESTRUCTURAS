import User from '../models/User.js'
import bcrypt from 'bcrypt'
import jwt from 'jwt-simple'
import config from "../config/index.js"


const register = async(req,res) => {

    try {
        /**
         * middleware de validacion
         * encriptar el password
         * guardar usuario nuevo con el pass encriptado
         */
        const encryptedPass = await bcrypt.hash(req.body.password,4)
        req.body.password = encryptedPass
        const user = await User.create(req.body)
        user.password = undefined
        return res.json({
            msg: 'Usuario creado',
            data: { user }
        })
    } catch (error)
    {
        if(error.code === 11000){
            return res.status(400).json({
                msg: 'Ya existe un usuario registrado con ese correo',
                error
            })             
        }
        return res.status(500).json({
            msg: 'Ocurrio un error al registra un usuario',
            error
        })
    }

}

const login = async(req, res) =>{
    /**
     * 1.- Validar que venga pass y correo
     * 2.- Buscar un usuarios con ese correo 
     * 3.- Comparar contraseñas con bcrypt 
     * 4.- Si todo coincide crear token y regresarlo
     * 5.- Si no coincide regresar un 401
     */

    try{
        const user = await User.findOne({
            email: req.body.email,
        })
        if (!user){
            return res.status(404).json({
                msg: 'Usuario no encontrado'
            })
        }
        const passCorrect=await bcrypt.compare(req.body.password
            , user.password)
        if (!passCorrect){
            return res.status(401),json({
                msg: 'Credenciales inválidas'
            })
        }

        const payload = {
            userId : user.id
        }

        const token= jwt.encode(payload,config.jwt.secret)

        return res.json({
            msg: 'Login correcto',
            data: { token }
        })
    } catch (error){
        return res.status(500).json({
            msg: 'Error al hacer login'
        })
    }

}


export {login, register}