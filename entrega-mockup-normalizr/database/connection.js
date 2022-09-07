// module of connection to the database.
const mongoose = require('mongoose');
const url = "//localhost:27017/ecommerce";

const connection = mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true });

mongoose.connection.on('connected', () => {
    console.log('[Mongoose] - connected in:', url);
});

module.exports = connection;