import { connectionPool } from "../config/database";
import { NilaiMahasiswa } from "../models/mahasiswa";

export const getMhs = (req, res) => {
    connectionPool.query("SELECT * FROM nilai", (err,data) => {
        if(err){
            console.error(err);
            return;
        }
        let mhs = data.map(el=>{
            let {id, nama, mataKuliah,nilai, indeksNilai, created_at, updated_at} = el;
            let newMhs = new NilaiMahasiswa(id,nama)
            newMhs.mataKuliah = mataKuliah
            newMhs.nilai = nilai  
            newMhs.indeksNilai = indeksNilai
            newMhs.created_at = created_at
            newMhs.updated_at = updated_at
            return newMhs;
        })
        res.json(mhs)
    })
}
export const getMhsById = (req, res) => {
    let {id} = req.params
    connectionPool.query(`SELECT * FROM nilai WHERE id=${id}`, (err,data) => {
        if(err){
            console.error(err);
            return;
        }
        // console.log(data)
            let {id, nama, mataKuliah,nilai, indeksNilai, created_at, updated_at} = data[0]
            let newMhs = new NilaiMahasiswa(id,nama)
            newMhs.mataKuliah = mataKuliah
            newMhs.nilai = nilai
            newMhs.indeksNilai = indeksNilai
            newMhs.created_at = created_at
            newMhs.updated_at = updated_at
            res.json(newMhs)
        })
    }
export const createMhs = (req, res) => {
    let {nama,mataKuliah,nilai=0} = req.body
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
      return res.status(400).json({ err: "masukan nilai 1-100" });
    } else {
    connectionPool.query(`INSERT INTO nilai 
    (nama,matakuliah,nilai,indeksNilai) VALUES 
    ('${nama}','${mataKuliah}',${nilai},'${indeksNilai}')`, 
    (err,data) => {
        if(err){
            console.error(err);
            return;
        }
        console.log(data)
        res.json("create berhasil")
    })}
}
export const updateMhs = (req, res) => {
    let {nama,mataKuliah,nilai} = req.body
    let {id} = req.params
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
    connectionPool.query(`UPDATE nilai SET 
        nama='${nama}', 
        mataKuliah='${mataKuliah}', 
        nilai=${nilai}, 
        indeksNilai='${indeksNilai}', 
        updated_at=NOW() WHERE id=${id}`, 
        (err,data) => {
        if(err){
            console.error(err);
            return;
        }
        console.log(data)
        res.json("update berhasil")
    })}
}
export const deleteMhs = (req, res) => {
    let {id} = req.params
    connectionPool.query(`DELETE FROM nilai WHERE id=${id}`, 
        (err,data) => {
        if(err){
            console.error(err);
            return;
        }
        console.log(data)
        res.json("delete berhasil")
    })
}