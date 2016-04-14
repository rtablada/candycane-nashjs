
exports.up = function(knex, Promise) {
  return knex.schema.createTable(`sales`, (table) => {
    table.increments(`id`);
    table.integer(`store_id`);
    table.string(`sale_date`);
    table.string(`price`);
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable(`sales`);
};
