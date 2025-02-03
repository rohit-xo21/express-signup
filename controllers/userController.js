const User = require("../models/userModel");

const signup = async (req,res) => {
    try{
        const { username, email, password, dateOfBirth } = req.body;

        if(username.trim() == ""){
            res.status(400).json({message: "Username cannot be empty"});
        }

        if(email.trim() == ""){
            res.status(400).json({message: "Email cannot be empty"});
        }

        if(password.length <8 || password.length>16){
            res.status(400).json({message: "Password length should be greater than 8 or less than or equal to 16"});
        } 


        const user = new User({
            username,
            email,
            password,
            dateOfBirth
        })

        await user.save();
        res.status(200).send("User created successfully");
    } catch(err){
        res.status(500).json({message: err.message});
    }
}

module.exports = { signup };