import express from 'express'
export const router = express.Router()
import { createArticle, deleteArticle, getAllArticle, getArticleById, updateArticle} from '../controller/articlesController';
import { login, register } from '../controller/authController';
import { createCategories, deleteCategories, getCategories, getCategoriesById, updateCategories } from '../controller/categoriesController';
import { createImages, deleteImages, getImages, getImagesById, updateImages } from '../controller/imagesController';
import { createProfile, getProfile, updateProfile } from '../controller/profileController';
import { createTags, deleteTags, getTags, getTagsById, updateTags } from '../controller/tagsController';
import { jwtAuth } from '../middleware/auth';

router.get('/api/articles',getAllArticle)
router.post('/api/articles',jwtAuth,createArticle)
router.get('/api/articles/:id',getArticleById)
router.put('/api/articles/:id',jwtAuth,updateArticle)
router.delete('/api/articles/:id',jwtAuth,deleteArticle)


router.get('/api/images',getImages)
router.post('/api/images',jwtAuth,createImages)
router.get('/api/images/:id',getImagesById)
router.put('/api/images/:id',jwtAuth,updateImages)
router.delete('/api/images/:id',jwtAuth,deleteImages) 

router.get('/api/categories',getCategories)
router.post('/api/categories',jwtAuth,createCategories)
router.get('/api/categories/:id',getCategoriesById)
router.put('/api/categories/:id',jwtAuth,updateCategories)
router.delete('/api/categories/:id',jwtAuth,deleteCategories)

router.get('/api/tags',getTags)
router.post('/api/tags',jwtAuth,createTags)
router.get('/api/tags/:id',getTagsById)
router.put('/api/tags/:id',jwtAuth,updateTags)
router.delete('/api/tags/:id',jwtAuth,deleteTags)

router.post('/api/register',register)
router.post('/api/login',login)

router.get('/api/profile',jwtAuth,getProfile)
router.post('/api/profile',jwtAuth,createProfile)
router.put('/api/profile',jwtAuth,updateProfile)