const UserService = require('../services/user-service');

const userService =  new UserService();
const create = async (req, res) =>{

try {

    const user = await userService.create(req.body);
    return res.status(201).json({
        data : user,
        success : true,
        message : "Successfully created a user",
        err : {}
    });

    
} catch (error) {
    console.log(error);
    return res.status(500).json({
        data : {},
        success: false,
        message : 'Not able to create user',
        err: error
    });
    
}
}

const singIn = async (req, res) => {
    try {
        const user = await userService.signIn(req.body.email, req.body.password);
        return res.status(200).json({
            data : user,
            success:true,
            message:'Successfully signed in ',
            err:{}
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data : {},
            success: false,
            err: error
        });
        
    }

}

const isAuthenticated= async (req, res) => {
    try {
       const token =  req.headers['x-access-token'];
       
       const response = await userService.isAuthenticated(token);
       return res.status(200).json({
          data: response,
          success : true,
          err:{},
          message:'User is authenticated and token is valid'
       })
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data : {},
            message : 'Somethin went wrong ',
            success: false,
            err: error
        });
        
    }


}



module.exports = {
    create,
    singIn,
    isAuthenticated,
}