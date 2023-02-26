
const {User, Role} = require('../models/index');
const ValidationError = require('../utils/validation-error');
const {StatusCodes} = require('http-status-code');
const ClientError = require('../utils/client-error');

class UserRepository{

async create (data) {
   

try {
    const user = await User.create(data);
    return user;
    
} catch (error) {
    //console.log(error.errors);
    if(error.name == 'SequelizeValidationError'){ 
    //let validationError = new ValidationError(error);
    //console.log(validationError);
    throw new ValidationError(error);

    }
    console.log('Something went wrong on repository layer');
    throw error;
    
}

}

async destroy (userId){


try {
    
    await User.destroy(
        { 
        where :{
        id : userId,
        },
    });
    return true;
    
} catch (error) {
    console.log('Something went wrong on repository layer');
    throw error;
    
} 

}

async getById (userId) {
    try {
        const user = await User.findByPk(userId,
        { attribute :['email', 'id']
        });
        return user;
        
    } catch (error) {
        console.log('Something went wrong on repository layer');
        throw error;
        
    }

}

async getByEmail (userEmail) {

    try {

     const user = await User.findOne(
     { 
        where:{
        email:userEmail
        }
    });

    if(!user){
        throw new ClientError(
         'AttributeNotFound',
         'Invalid email sent in the request',
         'Please check email, as there is no record of email',
         StatusCodes.NOT_FOUND


        )
    }
     return user;

        
    } catch (error) {
        console.log('Something went wrong on repository layer');
        throw error;
        
    }

}


async isAdmin (userId) {
    try {
        const user = await User.findByPk(userId);
        const adminRole = await Role.findOne({
            where: {
                name : 'ADMIN'
            }
        });
        return user.hasRole(adminRole);
        
    } catch (error) {
        console.log('Something went wrong on repository layer');
        throw error;
    }

}


}

module.exports = UserRepository;