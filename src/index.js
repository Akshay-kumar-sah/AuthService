const express = require('express');
const bodyParser = require ('body-parser');
const {PORT} = require('./config/serverConfig');
const apiRoutes = require('./routes/inddex');

//const UserService = require('./services/user-service');

const db = require('./models/index');
const {User, Role} = require('./models/index');
const app = express();


const prepareAndServer = () => {


    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended:true}));
    app.use('/api',apiRoutes);

     app.listen(PORT,  async () => {
     console.log(`Started server on Port:${PORT}`);

     if(process.env.DB_SYNC){
      db.sequelize.sync({alter: true});

     }
      //  const service = new UserService();

      //  const newToken = service.createToken({email:'akki19082001@gmail.com',id:1});
      //  console.log('new token is ', newToken);

      const u1 = await User.findByPk(2);
      const r1 = await Role.findByPk(2);
      // r1.addUser(u1);
      u1.addRole(r1);

    });
}
prepareAndServer();