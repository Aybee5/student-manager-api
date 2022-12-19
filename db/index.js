const path = require("path");
const mysql = require("mysql");

const dbPath = path.resolve(__dirname, "./database.sqlite");

// using sqlite3 database
const database = require("knex")({
  client: "sqlite3",
  connection: {
    filename: dbPath,
  },
  useNullAsDefault: true,
});

//using sql connection
// const database = require('knex')({
//   client: 'mysql',
//   connection: {
//     host : '127.0.0.1',
//     port : 3306,
//     user : 'your_database_user',
//     password : 'your_database_password',
//     database : 'myapp_test'
//   }
//  useNullAsDefault: true,
// });

database.schema
  .hasTable("notes")
  .then((exists) => {
    if (!exists) {
      return database.schema
        .createTable("books", (table) => {
          table.increments("id").primary();
          table.integer("author");
          table.string("title");
          table.string("description");
        })
        .then(() => {
          console.log("Notes table' created");
        })
        .catch((error) => {
          console.error(`There was an error creating table: ${error}`);
        });
    }
  })
  .then(() => {
    console.log("done");
  })
  .catch((error) => {
    console.error(`There was an error setting up the database: ${error}`);
  });

module.exports = database;

// Using normal sql functions without helper

// const database = mysql.createPool({
//   host: "localhost",
//   user: "root",
//   password: "password",
//   database: "mydata",
// });

// module.exports = database;
