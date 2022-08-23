import jwt from 'jwt-simple'
import config from '../config/index.js'
import User from '../models/User.js'

const isAuth = async (req, res, next) => {

    try{
        /**
         * Ver si está pasando el token 
         * Si no está pasando el token  --> 400
         * Si falla la decodificación --> 401 (token inválido)
         * Si el token es válido buscar al usuario con ese id
         * Si no existe 401
         * Si si existe seguir con el request --> next()
         */
        const token = req.headers.authorization
        if(!token)
        {
            return res.status(400).json({
                msg :"Cabecera Autorization faltante"
            })
        }

        const payload = jwt.decode(token, config.jwt.secret)
        
        const user = await User.findById(payload.userId)

        if(!user)
        {
            return res.status(401).json({
                msg: 'Token inválido'
            })
        }
        
        const expirationDate=Date.parse(payload.expirationDate)

        if(expirationDate.getTime() < new Date().getTime() )
        {
            return res.status(400).json({
                msg: 'El token ha expirado'
            })
        }

        next()

    } catch (error){
        return res.status(401).json({
            msg: 'Token inválido'
        })
    }
}

export default isAuth