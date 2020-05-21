/*Arquivo de rotas da aplicação*/

import express from 'express'
import UserController from './controllers/UserController'

const routes = express.Router()

routes.get('/users', UserController.index)

export default routes