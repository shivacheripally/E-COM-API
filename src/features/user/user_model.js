class userModel{
    constructor(name, email, password, type){
        this.name = name,
        this.email = email,
        this.password = password,
        this.type = type
    }

    static getUser(email, password){
        for(const user of users){
            console.log("user", user);
            if(user.email == email && user.password == password) return user;
        }
        return "";
    }

    static signUpUser(name, email, password, type){
        const newUser = new userModel(name, email, password, type); 
        users.push(newUser);
        return newUser;
    }
}

const users = [
    new userModel("shiva", "shivacheripally14@gmail.com",'1', "seller"),
    new userModel("shiva", "shivacheripally1437@gmail.com",'123', "seller")
]

module.exports = userModel;