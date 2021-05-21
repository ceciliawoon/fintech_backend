const database = require("./database");

// query(what query to run, what to do with the results -> callback function)
database.connection.query("select * from seller", (errors, results) => {
  if (errors) {
    console.log("Errors: " + errors);
  } else {
    console.log(results);
  }
});
