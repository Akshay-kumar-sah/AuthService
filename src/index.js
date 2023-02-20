const express = require('express');
const bodyParser = require ('body-parser');
const {PORT} = require('./config/serverConfig');
const apiRoutes = require('./routes/inddex');


const app = express();


const prepareAndServer = () => {


    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended:true}));
    app.use('/api',apiRoutes);

    app.listen(PORT, () => {
     console.log(`Started server on Port:${PORT}`);
    });
}
prepareAndServer();