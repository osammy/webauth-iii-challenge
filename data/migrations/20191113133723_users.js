exports.up = function(knex, Promise) {
  // don't forget the return statement
  return knex.schema.createTable("users", tbl => {
    // creates a primary key called id
    tbl.increments();
    // creates a text field called name which is both required and unique
    tbl
      .string("username", 128)
      .unique()
      .notNullable();
    // creates a string field called name which is both required and unique
    tbl.string("password", 128).notNullable();

    // creates a string field called department which is both required and unique
    tbl.string("department", 128).notNullable();
  });
};

exports.down = function(knex, Promise) {
  // drops the entire table
  return knex.schema.dropTableIfExists("users");
};
