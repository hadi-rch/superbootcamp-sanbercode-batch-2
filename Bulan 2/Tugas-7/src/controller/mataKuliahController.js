import { connectionPool } from "../config/database";
import { MataKuliah } from "../models/mata_kuliah";
// import MataKuliah from "../models/mahasiswa";


export const getMataKuliah = (req, res) => {
    connectionPool.query("SELECT * FROM mata_kuliah", (err,data) => {
        if(err){
            console.error(err);
            return;
        }
        let matKul = data.map(el=>{
            let {id, nama, created_at, updated_at} = el;
            let newMatkul = new MataKuliah(id,nama)
            newMatkul.created_at = created_at
            newMatkul.updated_at = updated_at
            return newMatkul;
        })
        res.json(matKul)
    })
}
export const getMataKuliahById = (req, res) => {
    let {id} = req.params
    connectionPool.query(`SELECT * FROM mata_kuliah WHERE id=${id}`, (err,data) => {
        if(err){
            console.error(err);
            return;
        }
        // console.log(data)
        if(data.length === 0){
            res.status(404).json("data kosong");
        }
            let {id, nama, created_at, updated_at} = data[0]
            let newMatkul = new MataKuliah(id,nama)
            newMatkul.created_at = created_at
            newMatkul.updated_at = updated_at
            res.json(newMatkul)
        })
    }
export const createMataKuliah = (req, res) => {
    let {nama} = req.body
    connectionPool.query(`INSERT INTO mata_kuliah (nama) VALUES ('${nama}')`, (err,data) => {
        if(err){
            console.error(err);
            return;
        }
        console.log(data)
        res.json("create berhasil")
    })}
export const updateMataKuliah = (req, res) => {
    let {nama} = req.body
    let {id} = req.params
    connectionPool.query(`UPDATE mata_kuliah SET nama='${nama}', updated_at=NOW() WHERE id=${id}`, 
        (err,data) => {
        if(err){
            console.error(err);
            return;
        }
        console.log(data)
        res.json("update berhasil")
    })}

export const deleteMataKuliah = (req, res) => {
    let {id} = req.params
    connectionPool.query(`DELETE FROM mata_kuliah WHERE id=${id}`, 
        (err,data) => {
        if(err){
            console.error(err);
            return;
        }
        console.log(data)
        res.json("delete berhasil")
    })
}