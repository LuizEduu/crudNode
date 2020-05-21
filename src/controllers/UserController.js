/*
async await = esperar o resultado de algo e tornar a função assincróna
*/

import knex from '../database'

export default {
   async index (req , res){
    const result =  await knex('users')
    return res.json(result)
  }
}