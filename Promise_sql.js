const mysql = require("mysql");

function getCustomers(){

    const connection = mysql.createConnection({


     host: "local host";
     user : "root";
     Password : "toor";
     database : "classicmodels"        
    });
//* Promisification of callbacks

return new Promise((result,reject) => {

//! mysql library is callback based, it does NOT return results of query
connection.query("Select")


)}
}