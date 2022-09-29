import express from 'express'
export const router = express.Router()
import authentication from '../auth/auth'
import { createMahasiswa, deleteMahasiswa, getMahasiswa, getMahasiswaById, updateMahasiswa } from '../controller/mahasiswaController'
import { createMataKuliah, deleteMataKuliah, getMataKuliah, getMataKuliahById, updateMataKuliah } from '../controller/mataKuliahController'
import { createNilaiMhs, deleteNilaiMhs, getNilaiMhs, getNilaiMhsById, updateNilaiMhs } from '../controller/nilaiMahasiswaController'

router.get('/api/nilai-mahasiswa',getNilaiMhs)
router.post('/api/nilai-mahasiswa',authentication,createNilaiMhs)
router.get('/api/nilai-mahasiswa/:id',getNilaiMhsById)
router.put('/api/nilai-mahasiswa/:id',authentication,updateNilaiMhs)
router.delete('/api/nilai-mahasiswa/:id',authentication,deleteNilaiMhs)

router.get('/api/mata-kuliah',getMataKuliah)
router.post('/api/mata-kuliah',authentication,createMataKuliah)
router.get('/api/mata-kuliah/:id',getMataKuliahById)
router.put('/api/mata-kuliah/:id',authentication,updateMataKuliah)
router.delete('/api/mata-kuliah/:id',authentication,deleteMataKuliah)

router.get('/api/mahasiswa',getMahasiswa)
router.post('/api/mahasiswa',authentication,createMahasiswa)
router.get('/api/mahasiswa/:id',getMahasiswaById)
router.put('/api/mahasiswa/:id',authentication,updateMahasiswa)
router.delete('/api/mahasiswa/:id',authentication,deleteMahasiswa)

