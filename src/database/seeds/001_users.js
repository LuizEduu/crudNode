/*
Seeds executam coisas pré definidas

*/
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {username: 'Luiz Eduardo', email: 'l.eduardo8316@gmail.com'},
        {username: 'José da silva', email: 'jose@hotmail.com'}
      ]);
    });
};
