/*Arquivo de rotas da aplicação*/

import express from 'express'
import UserController from './controllers/UserController'

const routes = express.Router()

routes.post('/users', UserController.create)
routes.get('/users', UserController.index)
routes.put('/users/:id', UserController.update)
routes.delete('/users/:id', UserController.delete)

export default routes