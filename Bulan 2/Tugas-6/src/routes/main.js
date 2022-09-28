import express from 'express'
import { getMhs, createMhs, updateMhs, deleteMhs, getMhsById } from '../controller/mhsController'
import authentication from '../auth/auth'
export const router = express.Router()

router.get('/api/mahasiswa',getMhs)
router.post('/api/mahasiswa',authentication,createMhs)
router.get('/api/mahasiswa/:id',getMhsById)
router.put('/api/mahasiswa/:id',authentication,updateMhs)
router.delete('/api/mahasiswa/:id',authentication,deleteMhs)


