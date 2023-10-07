const userModel = require('./user_model');

class userController{

    userHome = function(req, res){
        return res.send('<h1>User Home Page Here SignIn and SignUp...</h1>')    
    }

    signIn = function(req, res){
        const {email, password} = req.body;
        const user = userModel.getUser(email, password);
        console.log("user", user);
        if(user){
            return res.status(200).send(user);
        }
        return res.status(404).send("User Not Found Please SignIn!");
    }

    signUp = function(req, res){
        const {name, email, password, type} = req.body;
        const user = userModel.signUpUser;
    }
}

module.exports = userController;