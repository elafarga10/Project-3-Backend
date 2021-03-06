const mongoose = require('mongoose');

mongoose.Promise = Promise;

const mongoURI =
    process.env.NODE_ENV === 'production'
        ? process.env.MONGODB_URI
        : 'mongodb://localhost/foodviewer';

mongoose
    .connect(mongoURI, {
        useNewUrlParser: true,
        useCreateIndex: true,
        useUnifiedTopology: true,
        useFindAndModify: false
    }
    )
    .then((instance) =>
        console.log(`Connected to db: ${instance.connections[0].name}`)
    )
    .catch((error) => console.log('Connection failed!', error));

module.exports = mongoose;