import { PrismaClient } from "@prisma/client";
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

const prisma = new PrismaClient()

export const register = async (req,res) =>  {
    let{username,email,password} = req.body

    const hashedPassword = await bcrypt.hash(password, 10)

    const user = await prisma.user.create({data:{username,email,password: hashedPassword}})
    const expiresIn = 2*24*3600 //2 days
    const token = jwt.sign({userId: user.id,username,email},process.env.TOKEN_SECRET, {expiresIn});

    return res.json({user:{id: user.id,username,email}, token})
}
export const login = async (req, res) => {
    let {username, email, password} = req.body

    const user = await prisma.user.findFirstOrThrow({
        where: {
            OR: [
                {username},
                {email}
            ]
        }
    })

    if(user){
        const valid = bcrypt.compare(password, user.password)
        if(!valid){
            return res.json("invalid credential")
        }else{
            const expiresIn = 2*24*3600 // 2 days
            const token = jwt.sign({userId: user.id}, process.env.TOKEN_SECRET, {expiresIn })
            const {id, username, email} = user
            return res.json({user: {id, username, email}, token})
        }
    }else{
        return res.json("invalid credential")
    }
}