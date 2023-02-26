const AppError = require('./error-handler');
const {StatusCodes} = require('http-status-code');

class ClientError extends AppError {
  constructor (name,message,explanation,StatusCodes) {

    super( 

       name,
       message,
       explanation,
        StatusCodes.NOT_FOUND
    );

    

  }


}

module.exports = ClientError;