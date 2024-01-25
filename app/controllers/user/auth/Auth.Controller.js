const { UserModel } = require("../../../models/users");
const { hashPassword, generateActivationToken, transporter } = require("../../../utils/functions");
const { authRegisterSchema } = require("../../../validations/user/auth.schema");
const Controller = require("../../Controller");
class UserAuthController extends Controller{


    // async registerUser(username, email, password){
    //    const{error} = authRegisterSchema.validateAsync({username, email, password});

    //    if(error){
    //     throw new Error(error.details[0].message);
    //    }

    //    this.checkExistUser(username, email);
    //    const hashedPassword = hashPassword(password);
    //    const activationToken = generateActivationToken();
    //    const newUser = new UserModel({
    //     username,
    //     password: hashedPassword,
    //     activationToken
    //    });

    //    await newUser.save();
    //    return {
    //     user: newUser,
    //     activationToken
    //    }
    // }


    // async activateAccount(activationToken) {
    //     const user = await this.UserModel.findOne({ activationToken });
    
    //     if (!user) {
    //       throw new Error('Invalid activation token');
    //     }
    
    //     user.activated = true;
    //     await user.save();
    
    //     return 'Account activated successfully';
    //   }

    // async loginUser(){
    //     const{error} = authRegisterSchema.validateAsync({username, email, password});
    //     if(error){
    //         throw new Error(error.details[0].message);
    //     }

    //     const user = await this.UserModel.findOne({ email });

    //     if (!user || !user.activated) {
    //       throw new Error('Invalid credentials or account not activated');
    //     }

    //     const passwordMatch = await bcrypt.compare(password, user.password);

    //     if (!passwordMatch) {
    //       throw new Error('Invalid credentials or account not activated');
    //     }

    //     return 'Login successful';
    //   }  

    //   async login(req, res, next){
    //     try {
    //         const { username, email, password } = req.body;
    //         const { user: newUser, activationToken } = await this.registerUser(username, email, password);
    //         res.status(200).json({ message: loginMessage });
    //     } catch (error) {
    //         console.error(error.message);
    //         res.status(401).json({ error: error.message });
    //     }
    //   }

      
    }


    


module.exports = {
    UserAuthController : new UserAuthController()
}