const express = require('express')
const app = express()
const port = 3000


app.use(express.static('public'))

app.get('/', (req, res) => {
  res.send(
    `Hello World!`
  )
})

app.get('/lingkaran-tabung', (req, res) => {
  let jari = req.query.jari
  let tinggi = req.query.tinggi
  var luasLingkaran = Math.PI * jari*jari
  var kelilingLingkaran = 2*Math.PI * jari
  var volumeTbg= Math.PI * jari*jari*tinggi

  if(jari & tinggi){
      res.send(`jari jari: ${jari}, tinggi: ${tinggi}, volume tabung: ${volumeTbg.toFixed(2)}, alas tabung: ${kelilingLingkaran.toFixed(2)}, keliling alas tabung: ${luasLingkaran.toFixed(2)}`)
  }
})
app.get('/data-orang', (req, res) => {
  let dataOrang =[
      {id: 1, name: "John", umur: 30, pekerjaan: "Penulis", jenisKelamin: "L"},
      {id: 4, name: "Benzema", umur: 34, pekerjaan: "Pemain Bola", jenisKelamin: "L"},
      {id: 5, name: "Sarah", umur: 27, pekerjaan: "Model", jenisKelamin: "P"},
      {id: 9, name: "Shohei Ohtani", umur: 28, pekerjaan: "Pemain Baseball", jenisKelamin: "L"},
      {id: 11, name: "Maria Sharapova", umur: 35, pekerjaan: "Petenis", jenisKelamin: "P"}
  ]
let age = req.query.age
let gender = req.query.gender
if(age && gender){
    let newdatas = dataOrang.filter(item=> item.umur >= age && item.jenisKelamin === gender)
    let hasil = '' 
    newdatas.forEach((item, index)=>{
        hasil += `${index + 1}. ${item.name} - Pekerjaan: ${item.pekerjaan} - Umur: ${item.umur} Tahun <br/>`
    })
    res.send(`${hasil}`)
  }
})

app.get('/data-orang/:id', (req, res) => {
  let dataOrang =[
      {id: 1, name: "John", umur: 30, pekerjaan: "Penulis", jenisKelamin: "L"},
      {id: 4, name: "Benzema", umur: 34, pekerjaan: "Pemain Bola", jenisKelamin: "L"},
      {id: 5, name: "Sarah", umur: 27, pekerjaan: "Model", jenisKelamin: "P"},
      {id: 9, name: "Shohei Ohtani", umur: 28, pekerjaan: "Pemain Baseball", jenisKelamin: "L"},
      {id: 11, name: "Maria Sharapova", umur: 35, pekerjaan: "Petenis", jenisKelamin: "P"}
  ]

  
  let id = req.params.id
  let newdatas = dataOrang.filter(item => item.id === Number(id))
  if(newdatas.length !== 0){
      res.send(`${newdatas[0].jenisKelamin === "L" ? "Pak" : newdatas[0].jenisKelamin === 'P' ? 'Bu' : ''} ${newdatas[0].name} 
      adalah seorang ${newdatas[0].pekerjaan} yang berusia ${newdatas[0].umur} tahun`)
  }else{
      res.send('Maaf data tidak ditemukan')
  }
})

  app.listen(port,() => {
    console.log(`Example App listening on port ${port}`)
    })