import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const getImages = async (req,res) => {
 const image = await prisma.images.findMany()
 return res.status(200).json(image)
}

export const getImagesById = async (req, res) => {
    try {
        const response = await prisma.images.findFirstOrThrow({
            where: {
                id: Number(req.params.id)
            }
        })
        return res.status(200).json(response)
    } catch (err) {
        return res.status(404).json({error: err.message})
    }
}
export const createImages = async (req, res) =>{
    const {name, image_url, article_id} = req.body;
    if (!isValidUrl(image_url)) {
        return res.status(400).json({ err: "image_url value is not URL" });
    }else{
        const response = await prisma.images.create({
            data:{
                name : name,
                image_url : image_url,
                article_id : article_id
            }
        })
        res.status(201).json(response);
    }
}
export const updateImages = async (req, res) => {
    let {name, image_url, article_id}= req.body
    if (!isValidUrl(image_url)) {
        return res.status(400).json({ err: "image_url value is not URL" });
    }else{
        const response = await prisma.images.update({
            where: {
                id: Number(req.params.id)
            },
            data:{
                name : name,
                image_url : image_url,
                article_id : article_id
            }
        })
        res.status(201).json(response);
    }
}

export const deleteImages = async (req, res) => {
    await prisma.images.delete({
        where: {
            id: Number(req.params.id)
        }
    })
      
    res.json("image was successfully deleted")
  }
  
export const isValidUrl = image_url=> {
  try { 
      return Boolean(new URL(image_url)); 
  }
  catch(e){ 
      return false; 
  }
}
