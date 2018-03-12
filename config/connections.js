
//=============================================
//  CONNECTION.JS - THIS FILE INITIATES THE CONNECTION TO MYSQL
//  WHICH CAN BE EITHER ON THE LOCAL COMPUTER OR DEPLOYED TO JAWSDB
//
//
var mysql = require('mysql');

var source = {

    localhost: {
        port: 3000,
        host: 'localhost',
        user: 'root',
        password: 'terrykim93',
        database: "burgers_db"
    },

}

var connection = mysql.createConnection(source.localhost);


connection.connect(function(err) {
    if (err) {
        console.error('error connecting: ' + err.stack);
        return;
    }
    console.log('connected as id ' + connection.threadId);
});

module.exports = connection;