// Update with your config settings.
/*
Arquivo de confis do database para o knex, para criar ele
npx knex init - cria o knexfile.js na raiz do projeto
*/

module.exports = {

  development: {
    client: 'pg',
    connection: {
      database: 'crudNode',
      user:'postgres',
      password: 'admin'
    },
    migrations:{
      tableName: 'knex_migrations',
      directory: `${__dirname}/src/database/migrations`
    },
    seeds:{
      directory: `${__dirname}/src/database/seeds`
    }
  },

};