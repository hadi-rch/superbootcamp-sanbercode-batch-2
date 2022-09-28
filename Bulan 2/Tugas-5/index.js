const express = require('express')
const app = express()
const port = 8080


class NilaiMahasiswa{
    constructor(id, nama){
      this.id = id
      this.nama= nama
      this.mataKuliah= ""
      this.nilai= 0
      this.indeksNilai= ""
    }
  }
  
let semuaNilaiMahasiswa = []
const getMhs = (req, res) => {
    res.status(200).json(semuaNilaiMahasiswa)
}


const postMhs = (req, res) => {
    // let newId = semuaNilaiMahasiswa[semuaNilaiMahasiswa.length-1].id + 1
    let newId = semuaNilaiMahasiswa.length + 1;
    let {nama,mataKuliah,nilai} = req.body
    let indeksNilai ="";
    if (nilai <= 100 && nilai >= 80) {
        indeksNilai="A";
      } else if (nilai < 80 && nilai >= 70) {
        indeksNilai="B";
      } else if (nilai < 70 && nilai >= 60) {
        indeksNilai="C";
      } else if (nilai < 60 && nilai >= 50) {
        indeksNilai="D";
      } else if (nilai < 50 && nilai >= 0) {
        indeksNilai="E";
      } else {
        console.log('Nilai tidak valid');
      }
    if (nilai > 100 || nilai < 0) {
      res.status(400).json({ err: "masukan nilai 1-100" });
    } else {
    let newMhs = new NilaiMahasiswa(newId,nama,mataKuliah,nilai,indeksNilai)
    newMhs.mataKuliah = mataKuliah;
    newMhs.nilai = nilai;
    newMhs.indeksNilai = indeksNilai;
    semuaNilaiMahasiswa = [...semuaNilaiMahasiswa, newMhs]
    res.status(200).json()
}
};
function authentication(req, res, next) {
    var authheader = req.headers.authorization;
  
    if (!authheader) {
      var err = "You are not authenticated!"
      res.setHeader('WWW-Authenticate', 'Basic');
      err.status = 401;
      return next(err)
    }
  
    var auth = new Buffer.from(authheader.split(' ')[1], 'base64').toString().split(':');
    var user = auth[0];
    var pass = auth[1];
  
    if (user == 'admin' && pass == 'password') {
      // If Authorized user
      next();
    } else if (user == 'admin' && pass != 'password') {
      var err = "Password salah"
      res.setHeader('WWW-Authenticate', 'Basic');
      err.status = 401;
      return next(err);
    } else {
      var err = "username & password salah "
      res.setHeader('WWW-Authenticate', 'Basic');
      err.status = 401;
      return next(err);
  }
}
  
app.use(express.json())
app.post('/mahasiswa',authentication, postMhs)
app.get('/mahasiswa', getMhs)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})