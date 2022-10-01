import { connectionPool } from "../config/database";
import { Category } from "../models/category";

export const getCategory= (req, res) => {
    connectionPool.query("SELECT * FROM category", (err,data) => {
        if(err){
            console.error(err);
            return;
        }
        if(data.length === 0){
            res.status(404).json("data kosong");
        }
        let newCategory = data.map(el=>{
            let {id,name, created_at, updated_at} = el;
            let newCtgr = new Category(id,name)
            newCtgr.created_at = created_at
            newCtgr.updated_at = updated_at
            return newCtgr;
        })
        res.json(newCategory)
    })
}
export const getCategoryById = (req, res) => {
    let {id} = req.params
    connectionPool.query(`SELECT * FROM category WHERE id=${id}`, (err,data) => {
        if(err){
            console.error(err);
            console.log(err)
            return;
        }
        if(data.length === 0){
            res.status(404).json("data kosong");
        }
        // console.log(data)
            let {id,name, created_at, updated_at} = data[0]
            let newCategory = new Category(id,name)
            newCategory.created_at = created_at
            newCategory.updated_at = updated_at
            res.json(newCategory)
        })
    }
export const createCategory = (req, res) => {
    let {name} = req.body
    connectionPool.query(`INSERT INTO category (name) VALUES ('${name}')`, 
    (err,data) => {
        if(err){
            console.error(err);
            return;
        }
        console.log(data)
        res.json("create berhasil")
    })}
export const updateCategory = (req, res) => {
    let {name} = req.body
    let {id} = req.params
    connectionPool.query(`UPDATE category SET name='${name}',updated_at=NOW() WHERE id=${id}`, 
        (err,data) => {
        if(err){
            console.error(err);
            return;
        }
        console.log(data)
        res.json("update berhasil")
    })}
export const deleteCategory = (req, res) => {
    let {id} = req.params
    connectionPool.query(`DELETE FROM category WHERE id=${id}`, 
        (err,data) => {
        if(err){
            console.error(err);
            return;
        }
        console.log(data)
        res.json("delete berhasil")
    })
}