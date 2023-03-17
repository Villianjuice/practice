import express from 'express'
import mongoose from 'mongoose'

import { registerValidation, loginValidation } from './validations/validation.js'
import checkAuth from './utils/checkAuth.js'
import * as userController from './controllers/userController.js'

mongoose
    .connect('mongodb+srv://admin:wwwwww@cluster1.lcfuxvg.mongodb.net/blog?retryWrites=true&w=majority')
    .then(() => console.log('DB OK'))
    .catch(err => console.log('DB doesnt OK', err))

const app = express()

app.use(express.json())

app.post('/auth/login', loginValidation, userController.login)

app.post('/auth/register', registerValidation, userController.register)

app.get('/auth/me', checkAuth, userController.getMe)

app.listen(4000, (err) => {
    if (err) {
        return console.log(err)
    }
    return console.log('Server OK')
})