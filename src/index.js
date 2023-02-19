const express = require('express');
const {PORT} = require('./config/serverConfig');

const app = express();


const prepareAndServer = () => {

    app.listen(PORT, () => {
     console.log(`Started server on Port:${PORT}`);
    });
}
prepareAndServer();