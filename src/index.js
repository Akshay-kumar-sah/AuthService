const express = require('express');
const bodyParser = require ('body-parser');
const {PORT} = require('./config/serverConfig');
const apiRoutes = require('./routes/inddex');

//const UserService = require('./services/user-service');


const app = express();


const prepareAndServer = () => {


    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended:true}));
    app.use('/api',apiRoutes);

     app.listen(PORT,  () => {
     console.log(`Started server on Port:${PORT}`);

      //  const service = new UserService();

      //  const newToken = service.createToken({email:'akki19082001@gmail.com',id:1});
      //  console.log('new token is ', newToken);

    });
}
prepareAndServer();