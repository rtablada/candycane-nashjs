
exports.up = function(knex, Promise) {
  return knex.schema.createTable(`frameworks`, function(table) {
    table.string(`name`);
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable(`frameworks`);
};
