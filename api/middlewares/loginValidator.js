/**
 * 1. Un schema de joi
 * 2. Validar en un try catch 
*/
import joi from 'joi'

const loginSchema = joi.object({
    // Campos a validar
       email: joi.string().required(),
       password: joi.string().required(),
})


export default async(req, res, next) => {

        try{
            // TODO: Validacion
            await loginSchema.validateAsync(req.body)
            next()
        } catch (error) {
            return res.status(400).json({
                msg: 'Error de validación en login',
                error
            })
        }
}