const users = require('../Model/userModel')
const jwt = require('jsonwebtoken')

// register
exports.registerUser = async (req, res) => {
    const { username, email, password } = req.body;
    try {
        const existingUser = await users.findOne({ email });
        if (existingUser) {
            res.status(406).json("Account already exist")
        }
        else {
            const newUser = new users({
                username,
                email,
                password
            })
            await newUser.save();
            res.status(200).json("user registered successfully")
        }

    } catch (error) {
        res.status(401).json(error)
    }
}

exports.loginUser = async (req, res) => {
    const { email, password } = req.body;
    try {
        const existingUser = await users.findOne({ email, password });
        if (existingUser) {
            const token = jwt.sign({userId:existingUser._id},process.env.SECRET_KEY)
            console.log("token:", token)
            res.status(200).json({existingUser,token})
        }
        else {
            res.status(406).json("Invalid email or password")
        }

    } catch (error) {
        res.status(401).json(error)
    }
}