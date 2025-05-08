const {MongoClient} = require("mongodb");

let dbConnection;

// cb is the callback function passed to connectToDb function called from app.js
module.exports = {
    connectToDb : (cb) => {
        MongoClient.connect("mongodb://localhost:27017/Learning_Phase")
        .then((client) => {
            dbConnection = client.db();
            cb(null);
        })
        .catch((err) => {
            console.log(err);
            cb(err);
        });
    },
    getDb : () => dbConnection
};