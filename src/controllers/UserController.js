/*
async await = esperar o resultado de algo e tornar a função assincróna
*/

import knex from '../database'

export default {

  async index(req, res) {
    const result = await knex('users')
    return res.json(result)
  },

  async create(req, res, next) {
    const { username, email } = req.body
    try {
      await knex('users').insert({
        username,
        email
      })
      return res.json({
        'username': username,
        'email': email
      }).status(201)

    } catch (error) {
      next(error)
    }
  },

  async update(req, res, next) {
    try {
      const { id } = req.params
      const { username, email } = req.body

      const user = await knex
        .select('username', 'email')
        .from('users')
        .where({ id })

      if (id != null && user.length != null) {
        await knex('users')
          .update({
            username: username,
            email: email,
            updated_at: knex.fn.now()
          }).where({ id })

        return res.send()
      }
    } catch (error) {
      next(error)
    }
  },


  async delete(req, res, next) {
    try {

      const { id } = req.params

      if (id != null) {
        await knex('users').where({ id }).del()
        return res.status(204).send()
      }
    } catch (error) {
      next(error)
    }
  }

}