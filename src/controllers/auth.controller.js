import User from '../models/User.js';
import jwt from 'jsonwebtoken';
import config from '../config.js';
import Role from '../models/Role.js';

export const register = async (req, res) => {
    const { username, email, password, roles} = req.body;

    const newUser = new User({
        userName: username,
        email: email,
        password: await User.encryptPassword(password),
    });

    if (roles) {
        const foundedRoles = await Role.find({name: {$in: roles}})

        newUser.roles = foundedRoles.map(role => role._id);
    } else {
        const role = await Role.findOne({name: 'user'});
        newUser.roles = [role._id];
    }
    
    const savedUser = await newUser.save()
     

    const token = jwt.sign({id: savedUser._id}, config.SECRET, {
        expiresIn: 86400 // 24 hours
    });

    res.status(200).json({token});
};

export const login = async (req, res) => {
    const userFound = await User.findOne({email: req.body.email}).populate('roles');

    if (!userFound) return res.status(400).json({message: 'User not found'});

    const matchPassword = await User.comparePassword(req.body.password, userFound.password);

    if (!matchPassword) return res.status(401).json({token: null, message: 'Invalid password'});
    

    const token = jwt.sign({id: userFound._id}, config.SECRET, {
        expiresIn: 86400 // 24 hours
    })


    res.json({token})
}
