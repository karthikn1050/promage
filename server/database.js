
const mongoose = require('mongoose');

module.exports = () => {
    mongoose.connect('mongodb://localhost/promages', {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
        useFindAndModify: true,
    }).then(() => console.log('Connected to Mongodb......'));
}