// allow environment variables
require('dotenv').config();

// Starting backend server and data base conection
const app = require('./app');
require('./database');

async function main(){
    await app.listen(app.get('port'));
    console.log(`server on port ${app.get('port')}`);
}

main();

