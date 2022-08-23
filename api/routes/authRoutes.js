import express from 'express'
import { login, register } from '../controllers/authController.js'
import createUserValdiator from '../middlewares/createUserValdiator.js'
import loginValidator from '../middlewares/loginValidator.js'

const router = express.Router()

/**
 * /login
 * /register
 */

router.post ('/register',createUserValdiator,register)
router.post ('/login',loginValidator,login)

export default router
