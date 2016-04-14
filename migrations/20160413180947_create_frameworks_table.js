
exports.up = function(knex, Promise) {
  return knex.schema.createTable(`frameworks`, function(table) {
    table.string(`name`);
  }).then(() => {
    return knex(`frameworks`).insert([
      {name: `Ember.js`},
      {name: `Loopback`},
      {name: `Angular`},
      {name: `React`},
      {name: `Sails.js`},
    ]);
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable(`frameworks`);
};
