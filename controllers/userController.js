import jwt from 'jsonwebtoken'
import { validationResult } from 'express-validator' 
import bcrypt from 'bcrypt'

import UserModel from '../models/User.js';


export const login = async (req, res) => {
    try {
        const user = await UserModel.findOne({email: req.body.email})

        if (!user) {
            return res.status(404).json({
                message: 'Пользователь не найден'
            })
        }

        const isValidPassword = await bcrypt.compare(req.body.password, user._doc.passwordHash)

        if (!isValidPassword) {
            return res.status(400).json({
                message: 'Неверный логин или пароль'
            })
        }

        const token = jwt.sign(
            {
            _id: user._id
            },
            'secret123',
            {expiresIn: '30d'}
        );

        const {passwordHash, ...userData} = user._doc;

        res.status(200).json({
            ...userData,
            token
        })

    } catch (err) {
        console.log(err) 
        return res.status(500).json({
            message: 'Something went wrong',
        })
    }
}

export const register = async (req, res) => {
    try {
        const errors = validationResult(req);

        if (!errors.isEmpty()) {
            return res.status(400).json(errors.array())
        }
    
        const saltRounds = await bcrypt.genSalt(10)
        const hash = await bcrypt.hash(req.body.password, saltRounds)
    
        const doc = new UserModel({
            fullName: req.body.fullName,
            email: req.body.email,
            avatarUrl: req.body.avatarUrl,
            passwordHash: hash
        })
    
        const user = await doc.save()

        const token = jwt.sign(
            {
            _id: user._id,
            },
            'secret123',
            {
                expiresIn: '30d'
            }
        )
    
        const {passwordHash, ...userData} = user._doc

        res.status(200).json({
            ...userData,
            token
        })
    } catch (err) {
        console.log(err)
        res.status(500).json({
            message: 'Something went wrong'
        })
    }
}

export const getMe = async(req, res) => {
    try {
        const user = await UserModel.findById(req.userId)

        if (!user) {
            return res.status(404).json({
                message: 'Пользователь не найден'
            })
        }
        const { passwordHash, ...userData } = user._doc;
        res.json(userData)
    } catch (err) {
        console.log(err)
        res.status(500).json({
            message: 'Нет доступа'
        })
    }
}