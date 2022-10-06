import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const getArticles = async (req,res) => {
 const article = await prisma.articles.findMany({
    include:{
        images: true,
        articles_tags:true,
        articles_categories: true
    }
 })
 return res.status(200).json(article)
}

export const getArticlesById = async (req, res) => {
    try {
        const response = await prisma.articles.findFirstOrThrow({
            where: {
                id: Number(req.params.id)
            }
        })
        return res.status(200).json(response)
    } catch (err) {
        return res.status(404).json({error: err.message})
    }
}
export const createArticles = async (req, res) =>{
    const {title,content,published} = req.body;
    if (published === 1 || published === 0){
        const article = await prisma.articles.create({
            data: {
                title : title,
                content : content,
                published : published
            }})
        res.status(200).json(article) 
      } else {
        return res.status(400).send('published value 1 or 0')
      }
}
export const updateArticles = async (req, res) => {
    let {title,content,published}= req.body
    if (published === 1 || published === 0){
        const article = await prisma.articles.update({
            where: {
                id: Number(req.params.id)
            },
            data: {
                title : title,
                content : content,
                published : published
            }})
        res.status(200).json(article) 
      } else {
        return res.status(400).send('published value 1 or 0')
      }
}

export const deleteArticles = async (req, res) => {
    await prisma.articles.delete({
        where: {
            id: Number(req.params.id)
        }
    })
      
    res.json("article was successfully deleted")
}

export const createTagArticle = async (req,res) => {
    let{article_id, tags_id} = req.body
    const article = await prisma.articles_tags.create({
      data:{
        article_id: article_id,
        tags_id: tags_id
      }
    })
    return res.status(200).json(article)
};

export const createCategoryArticle = async (req,res) => {
    let{article_id, category_id} = req.body
    const article = await prisma.articles_categories.create({
      data:{
        article_id: article_id,
        category_id: category_id
      }
    })
  return res.status(200).json(article)
};