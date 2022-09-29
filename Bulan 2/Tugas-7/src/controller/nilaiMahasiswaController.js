import { connectionPool } from "../config/database";
import { NilaiMahasiswa } from "../models/nilaiMahasiswa";

export const getNilaiMhs = (req, res) => {
    connectionPool.query("SELECT * FROM nilai", (err,data) => {
        if(err){
            console.error(err);
            return;
        }
        if(data.length === 0){
            res.status(404).json("data kosong");
        }
        let mhs = data.map(el=>{
            let {id, indeks, skor, mahasiswa_id, mata_kuliah_id, created_at, updated_at} = el;
            let newMhs = new NilaiMahasiswa(id)
            newMhs.indeks = indeks
            newMhs.skor = skor
            newMhs.mahasiswa_id = mahasiswa_id
            newMhs.mata_kuliah_id = mata_kuliah_id
            newMhs.created_at = created_at
            newMhs.updated_at = updated_at
            return newMhs;
        })
        res.json(mhs)
    })
}
export const getNilaiMhsById = (req, res) => {
    let {id} = req.params
    connectionPool.query(`SELECT * FROM nilai WHERE id=${id}`, (err,data) => {
        if(err){
            console.error(err);
            console.log(err)
            return;
        }
        if(data.length === 0){
            res.status(404).json("data kosong");
        }
        // console.log(data)
            let {id,indeks, skor, mahasiswa_id, mata_kuliah_id, created_at, updated_at} = data[0]
            let newMhs = new NilaiMahasiswa(id)
            newMhs.indeks = indeks
            newMhs.skor = skor
            newMhs.mahasiswa_id = mahasiswa_id
            newMhs.mata_kuliah_id = mata_kuliah_id
            newMhs.created_at = created_at
            newMhs.updated_at = updated_at
            res.json(newMhs)
        })
    }
export const createNilaiMhs = (req, res) => {
    let {skor=0,mahasiswa_id, mata_kuliah_id,} = req.body
    let indeks ="";
    if (skor <= 100 && skor >= 80) {
        indeks="A";
      } else if (skor < 80 && skor >= 70) {
        indeks="B";
      } else if (skor < 70 && skor >= 60) {
        indeks="C";
      } else if (skor < 60 && skor >= 50) {
        indeks="D";
      } else if (skor < 50 && skor >= 0) {
        indeks="E";
      } else {
        console.log('Nilai tidak valid');
      }
    if (skor > 100 || skor < 0) {
      return res.status(400).json({ err: "masukan skor 1-100" });
    } else {
    connectionPool.query(`INSERT INTO nilai 
    (skor,indeks,mahasiswa_id, mata_kuliah_id) VALUES 
    (${skor},'${indeks}',${mahasiswa_id},${mata_kuliah_id})`, 
    (err,data) => {
        if(err){
            console.error(err);
            return;
        }
        console.log(data)
        res.json("create berhasil")
    })}
}
export const updateNilaiMhs = (req, res) => {
    let {skor=0,mahasiswa_id, mata_kuliah_id} = req.body
    let {id} = req.params
    let indeks ="";
    if (skor <= 100 && skor >= 80) {
        indeks="A";
      } else if (skor < 80 && skor >= 70) {
        indeks="B";
      } else if (skor < 70 && skor >= 60) {
        indeks="C";
      } else if (skor < 60 && skor >= 50) {
        indeks="D";
      } else if (skor < 50 && skor >= 0) {
        indeks="E";
      } else {
        console.log('Nilai tidak valid');
      }
    if (skor > 100 || skor < 0) {
      res.status(400).json({ err: "masukan skor 1-100" });
    } else {
    connectionPool.query(`UPDATE nilai SET 
        skor=${skor}, 
        indeks='${indeks}',
        mahasiswa_id=${mahasiswa_id}, 
        mata_kuliah_id=${mata_kuliah_id}, 
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
export const deleteNilaiMhs = (req, res) => {
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