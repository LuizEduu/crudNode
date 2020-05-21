
/*Migrations - representações dos models no database
  Metodo Up - Executa algo quando a migration é feita
  npx knex migrate:make <nome da migration> - para criar uma migration
  npx knex migrate:latest - roda a ultima migration criada

  Metodo Down - Executa sempre que a migração der errado
  */

exports.up = knex => 
    knex.schema.createTable('users', table => {
    table.increments('id')
    table.text('username').unique().notNullable()
    table.text('email').unique().notNullable()

    table.timestamp('created_at').defaultTo(knex.fn.now())
    table.timestamp('updated_at').defaultTo(knex.fn.now())
  })

exports.down = knex => knex.schema.dropTable('users')