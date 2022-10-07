import { PrismaClient } from "@prisma/client";
import { getUser } from "../utils/helper";

const prisma = new PrismaClient()


export const getAllArticle= async(req,res)=>{
  const allArticle = await prisma.articles.findMany()

  res.json(allArticle)
}

export const getArticleById=async(req,res)=>{
  let {id} = req.params
  const article = await prisma.articles.findFirstOrThrow({
    where:{
      id: parseInt(id)
    },
    include: {
        articles_categories: true, articles_tags: true
    }
  })

  res.json(article)
}

export const createArticle = async (req, res)=>{
  let {userId} = getUser(req)
  // console.log(getUser(req))
  // console.log("why")
  // const user = await prisma.user.findUnique({
  //   where: {userId},
  //  })
  //  console.log(user)
  let  {title, content, published, tag_ids, category_ids} = req.body
  if (published === 1 || published === 0){

  const article = await prisma.articles.create({
    data:{
      title, content, published,
      author_id:userId,
      articles_categories: {
        create: category_ids.map(e=>{
          let result = {
            category:{
              connect:{
                id: e
              }
            }
          }            
          return result               
        })            
      },
      articles_tags: {
        create: tag_ids.map(e=>{
          let result = {
            tag:{
              connect:{
                id: e
              }
            }
          }            
          return result               
        })            
      }
    }
  })
  return res.json(article)
} else {
    return res.status(400).send('published value 1 or 0')
  }


}

const getNewIdsAndDeletedIds = (currentIds, newIds)=> {

  let generate_deleted_ids = []
  let generate_new_ids = []

  newIds.forEach(newId => {
    if (currentIds.indexOf(newId) === -1){
      generate_new_ids= [...generate_new_ids, newId]
    }
  });

  currentIds.forEach(currentId =>{
    if (newIds.indexOf(currentId) === -1){
      generate_deleted_ids= [...generate_deleted_ids, currentId]
    }
  })


  return [generate_deleted_ids, generate_new_ids]
}

export const updateArticle = async (req, res)=>{
  let {id}= req.params
  id = parseInt(id)

  let  {title, content, published, tag_ids, category_ids} = req.body


    const article = await prisma.articles.findFirstOrThrow({
      where:{
        id: parseInt(id)
      },
      include: {
        articles_categories: true, articles_tags: true
      }
    })
    
    let current_tag_ids = article.articles_tags.map(e=>e.tags_id)
    let current_category_ids = article.articles_categories.map(e=>e.category_id)

    
    let [deleted_category_ids, new_category_ids] = getNewIdsAndDeletedIds(current_category_ids, category_ids)


    let [deleted_tag_ids, new_tag_ids] = getNewIdsAndDeletedIds(current_tag_ids, tag_ids)


    deleted_tag_ids.forEach(async (element) => {      
      await prisma.articles_tags.delete({where: {article_id_tags_id: {
        article_id: id, tags_id: element
      }}})
      
    })

    deleted_category_ids.forEach(async (element) => {      
      await prisma.articles_categories.delete({where: {article_id_category_id: {
        article_id: id, category_id: element
      }}})      
    })
    

    const newArticle = await prisma.articles.update({
      data:{
        title, content, published,
        articles_categories: {
          create: new_category_ids.map(e=>{
            let result = {
              category:{
                connect:{
                  id: e
                }
              }
            }            
            return result               
          })            
        },
        articles_tags: {
          create: new_tag_ids.map(e=>{
            let result = {
              tag:{
                connect:{
                  id: e
                }
              }
            }            
            return result               
          })            
        }
      },
      where:{
        id
      },
      include: {
        articles_categories: true, articles_tags: true
      }
    })



    res.json(newArticle)

  

}

export const deleteArticle = async (req, res)=>{
  let {id}= req.params 
  id = parseInt(id)
  try{
    const article = await prisma.articles.findFirstOrThrow({
      where:{
        id
      },
      include: {
        articles_categories: true, articles_tags: true
      }
    })
    
    let current_tag_ids = article.articles_tags.map(e=>e.tags_id)
    let current_category_ids = article.articles_categories.map(e=>e.category_id)

    current_tag_ids.forEach(async (element) => {      
      await prisma.articles_tags.delete({where: {article_id_tags_id: {
        article_id: id, tags_id: element
      }}})
      
    })

    current_category_ids.forEach(async (element) => {      
      await prisma.articles_categories.delete({where: {article_id_category_id: {
        article_id: id, category_id: element
      }}})      
    })
    
    
    await prisma.articles.delete({
      where: {
        id: parseInt(id)
      }
    })
    
    res.json("article was sucesfully deleted")
  }catch(err){
    res.json({err})
  }

}
