import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const getTags = async (req,res) => {
 const tag = await prisma.tags.findMany({
    include :{
        article_tag : true
    }
 })
 return res.status(200).json(tag)
}

export const getTagsById = async (req, res) => {
    try {
        const response = await prisma.tags.findFirstOrThrow({
            where: {
                id: Number(req.params.id)
            }
        })
        return res.status(200).json(response)
    } catch (err) {
        return res.status(404).json({error: err.message})
    }
}
export const createTags = async (req, res) =>{
    const {name} = req.body;
    try {
        const response = await prisma.tags.create({
            data:{
                name : name,
            }
        })
        res.status(201).json(response);
    } catch (error) {
        res.status(400).json({message: error.message});
    }
}
export const updateTags = async (req, res) => {
    let {name}= req.body
    const tag = await prisma.tags.update({
        where: {
            id: Number(req.params.id)
        },
        data:{
            name : name,
        }
    })
    return res.status(200).json(tag)
}

export const deleteTags = async (req, res) => {
    await prisma.tags.delete({
        where: {
            id: Number(req.params.id)
        }
    })
      
    res.json("tag was successfully deleted")
  }
  
