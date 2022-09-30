import express from 'express'
import { getMhs, createMhs, updateMhs, deleteMhs, getMhsById } from '../controller/mhsController'
export const router = express.Router()

router.get('/api/mahasiswa',getMhs)
router.post('/api/mahasiswa',createMhs)
router.get('/api/mahasiswa/:id',getMhsById)
router.put('/api/mahasiswa/:id',updateMhs)
router.delete('/api/mahasiswa/:id',deleteMhs)


