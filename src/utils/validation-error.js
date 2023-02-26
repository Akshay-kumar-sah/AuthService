const AppError = require('./error-handler');
const {StatusCodes} = require('http-status-code');

class ValidationError extends AppError {
  constructor (error) {

    let errorName =error.name; 
    let explation = [];
    //Object.keys(error.errors);
    error.errors.forEach((err) => {
        explation.push(err.message);

    })


    super( 

       errorName,
       'Not able to validate the data sent in the request',
       explanation,
        StatusCodes.BAD_REQUEST
    );

    

  }


}

module.exports = ValidationError;