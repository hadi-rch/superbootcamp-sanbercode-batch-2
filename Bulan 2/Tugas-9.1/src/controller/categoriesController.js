import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const getCategories = async (req,res) => {
 const category = await prisma.categories.findMany({
    include:{
        article_categorie: true,
    }
 })
 return res.status(200).json(category)
}

export const getCategoriesById = async (req, res) => {
    try {
        const response = await prisma.categories.findFirstOrThrow({
            where: {
                id: Number(req.params.id)
            }
        })
        return res.status(200).json(response)
    } catch (err) {
        return res.status(404).json({error: err.message})
    }
}
export const createCategories = async (req, res) =>{
    const {name} = req.body;
    try {
        const response = await prisma.categories.create({
            data:{
                name : name,
            }
        })
        res.status(201).json(response);
    } catch (error) {
        res.status(400).json({message: error.message});
    }
}
export const updateCategories = async (req, res) => {
    let {name}= req.body
    const category = await prisma.categories.update({
        where: {
            id: Number(req.params.id)
        },
        data:{
            name : name,
        }
    })
    return res.status(200).json(category)
}

export const deleteCategories = async (req, res) => {
    await prisma.categories.delete({
        where: {
            id: Number(req.params.id)
        }
    })
      
    res.json("category was successfully deleted")
  }
  
