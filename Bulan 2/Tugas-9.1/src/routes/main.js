import express from 'express'
export const router = express.Router()
import { createArticles, createCategoryArticle, createTagArticle, deleteArticles, getArticles, getArticlesById, updateArticles } from '../controller/articlesController';
import { createCategories, deleteCategories, getCategories, getCategoriesById, updateCategories } from '../controller/categoriesController';
import { createImages, deleteImages, getImages, getImagesById, updateImages } from '../controller/imagesController';
import { createTags, deleteTags, getTags, getTagsById, updateTags } from '../controller/tagsController';

router.get('/api/articles',getArticles)
router.post('/api/articles',createArticles)
router.get('/api/articles/:id',getArticlesById)
router.put('/api/articles/:id',updateArticles)
router.delete('/api/articles/:id',deleteArticles)
router.post('/api/articles/tag',createTagArticle)
router.post('/api/articles/category',createCategoryArticle)


router.get('/api/images',getImages)
router.post('/api/images',createImages)
router.get('/api/images/:id',getImagesById)
router.put('/api/images/:id',updateImages)
router.delete('/api/images/:id',deleteImages) 

router.get('/api/categories',getCategories)
router.post('/api/categories',createCategories)
router.get('/api/categories/:id',getCategoriesById)
router.put('/api/categories/:id',updateCategories)
router.delete('/api/categories/:id',deleteCategories)

router.get('/api/tags',getTags)
router.post('/api/tags',createTags)
router.get('/api/tags/:id',getTagsById)
router.put('/api/tags/:id',updateTags)
router.delete('/api/tags/:id',deleteTags)