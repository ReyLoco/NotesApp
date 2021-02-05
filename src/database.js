const mongoose = require('mongoose');

// process.env contains system environment variables
const URI = process.env.MONGODB_URI;

// database conection
mongoose.connect(URI, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify: false 
});

const connection = mongoose.connection;

connection.once('open', () => {
    console.log('DB is connected');
});

