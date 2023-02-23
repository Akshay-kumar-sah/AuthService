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



module.exports = {
    create,
    singIn,
}