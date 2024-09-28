
import { Error } from 'mongoose';
import User from '../models/user.model.js';
import bcryptjs from 'bcryptjs';
import { errorHandler } from '../utils/error.js';

export const singup = async (req, res, next )=> {
    const { username, email, password } = req.body;

    if(!username || !email || !password || username === '' || email === '' || password === ''){
        next(errorHandler(400, 'All field are required'));
    }

    const hashedPassword = bcryptjs.hashSync(password, 10);

    const newUser = new User({ 
      username, 
      email, 
      password: hashedPassword,
    });

    try {
        await newUser.save();
        res.json("sing-up successeful");
    } catch (error) {
        next(error);
    }
}