// dbPassword = 'mongodb+srv://:BN-TEST'+ encodeURIComponent('1999') + 'TESTDB.mongodb.net/test?retryWrites=true';
const mongoose = require('mongoose');


dbPassword=mongoURI =  `mongodb+srv://${username}:${password}@cluster0.rtqpqob.mongodb.net/dbname?retryWrites=true&w=majority` 
module.exports = {
    mongoURI: dbPassword
};
