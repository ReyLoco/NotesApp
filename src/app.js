const express = require('express');
const cors = require('cors');
const app = express();

// settings
app.set('port', process.env.PORT || 4000); 


// middlewares
app.use(cors());  // allow communitation between backend and frontend
app.use(express.json()); // allow json communications


// routes
app.use('/api/users', require('./routes/users'))
app.use('/api/notes', require('./routes/notes'))


module.exports = app;