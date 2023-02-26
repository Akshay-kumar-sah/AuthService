const {INTERNAL_SERVER_ERROR} = require('http-status-code')
class AppErrors extends Error {
    constructor (
        name = 'AppError',
         message ='Something went wrong' ,
          explanation = 'Something went wrong',
          statusCode = INTERNAL_SERVER_ERROR
           ) {
            super();
        this.name = name,
        this.message = message,
        this.explanation  = explanation ,
        this.statusCode = statusCode



    }
}


module.exports = AppErrors;