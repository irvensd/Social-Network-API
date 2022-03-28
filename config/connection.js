const mongoose = require('mongoose');

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/socialmedia', {
});

module.exports = mongoose.connection;