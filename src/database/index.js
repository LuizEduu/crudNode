/*
Arquivo de configuração do database e knex
*/

import knexfile from '../../knexfile'
const  knex = require('knex')(knexfile.development)

export default knex