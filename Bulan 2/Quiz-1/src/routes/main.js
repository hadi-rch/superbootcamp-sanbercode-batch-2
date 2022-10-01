import express from 'express'
export const router = express.Router()
import authentication from '../middleware/auth'
import { createBook, deleteBook, getBook, getBookById, updateBook } from '../controller/book'
import { createCategory, deleteCategory, getCategory, getCategoryById, updateCategory } from '../controller/category'
import { jajarGenjang, lingkaran, persegi, persegiPanjang, segitigaSamaSisi } from '../controller/test'

router.get('/api/categories',getCategory)
router.post('/api/categories',authentication,createCategory)
router.get('/api/categories/:id',getCategoryById)
router.put('/api/categories/:id',authentication,updateCategory)
router.delete('/api/categories/:id',authentication,deleteCategory)

router.get('/api/books',getBook)
router.post('/api/books',authentication,createBook)
router.get('/api/books/:id',getBookById)
router.put('/api/books/:id',authentication,updateBook)
router.delete('/api/books/:id',authentication,deleteBook)


router.get('/bangun-datar/segitigaSamaSisi', segitigaSamaSisi)
router.get('/bangun-datar/persegi', persegi)
router.get('/bangun-datar/persegiPanjang', persegiPanjang)
router.get('/bangun-datar/lingkaran', lingkaran)
router.get('/bangun-datar/jajarGenjang', jajarGenjang)
