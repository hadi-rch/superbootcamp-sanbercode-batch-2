import { connectionPool } from "../config/database";
import { Mahasiswa } from "../models/mahasiswa";

export const getMahasiswa = (req, res) => {
    connectionPool.query("SELECT * FROM mahasiswa", (err,data) => {
        if(err){
            console.error(err);
            return;
        }
        let mhs = data.map(el=>{
            let {id, nama, created_at, updated_at} = el;
            let newMhs = new Mahasiswa(id,nama)
            newMhs.created_at = created_at
            newMhs.updated_at = updated_at
            return newMhs;
        })
        res.json(mhs)
    })
}
export const getMahasiswaById = (req, res) => {
    let {id} = req.params
    connectionPool.query(`SELECT * FROM mahasiswa WHERE id=${id}`, (err,data) => {
        if(err){
            console.error(err);
            return;
        }
        // console.log(data)
        if(data.length === 0){
            res.status(404).json("data kosong");
        }
            let {id, nama, created_at, updated_at} = data[0]
            let newMhs = new Mahasiswa(id,nama)
            newMhs.created_at = created_at
            newMhs.updated_at = updated_at
            res.json(newMhs)
        })
    }
export const createMahasiswa = (req, res) => {
    let {nama} = req.body
    connectionPool.query(`INSERT INTO mahasiswa (nama) VALUES ('${nama}')`, (err,data) => {
        if(err){
            console.error(err);
            return;
        }
        console.log(data)
        res.json("create berhasil")
    })}
export const updateMahasiswa = (req, res) => {
    let {nama} = req.body
    let {id} = req.params
    connectionPool.query(`UPDATE mahasiswa SET nama='${nama}', updated_at=NOW() WHERE id=${id}`, 
        (err,data) => {
        if(err){
            console.error(err);
            return;
        }
        console.log(data)
        res.json("update berhasil")
    })}

export const deleteMahasiswa = (req, res) => {
    let {id} = req.params
    connectionPool.query(`DELETE FROM mahasiswa WHERE id=${id}`, 
        (err,data) => {
        if(err){
            console.error(err);
            return;
        }
        console.log(data)
        res.json("delete berhasil")
    })
}