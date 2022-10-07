import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()
import { getUser } from '../utils/helper'

export const getProfile = async (req, res) => {
    let { userId } = getUser(req);
    try{
      const profile = await prisma.profile.findFirstOrThrow({where: { user_id: userId }})
      return res.status(200).json(profile)
    }catch (err){
      return res.status(404).json({error: err})
    }
}

export const createProfile = async (req, res) => {
    let { userId } = getUser(req);
    console.log(getUser(req))
    console.log("why")
    let { address, firstName, lastName, city, birth_date } = req.body;

    try {
      const profile = await prisma.profile.create({
        data: {
          address, firstName, lastName, city, birth_date, user_id:userId,
        }
    })
    return res.status(200).json(profile);
    } catch (err) {
        res.json({err})
        return res.status(404).json({error: err})
    }
}

export const updateProfile = async (req, res) => {
    let { userId } = getUser(req);
    let { address, firstName, lastName, city, birth_date } = req.body;

    try {
        const profile = await prisma.profile.update({
            where: {user_id: userId},
            data: {
                address, firstName, lastName, city, birth_date, user_id: userId,
            }
        })
        return res.status(200).json(profile);
    } catch(err) {
        return res.status(404).json({error: err})
    }
}
  
