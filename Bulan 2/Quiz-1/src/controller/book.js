import { connectionPool } from "../config/database";
import { Books } from "../models/book";
import { Url } from "url";
export const getBook = (req, res) => {
    let maxYear = req.query.maxYear
    let minYear = req.query.minYear
    let title = req.query.title

    if (title && maxYear && minYear) {
        connectionPool.query(`SELECT * FROM book WHERE release_year BETWEEN ${minYear} AND ${maxYear} and title LIKE '%${title}%'`, (err, data) => {
            if(err){
                console.log(err);
                res.sendStatus(500);
                return;
            }
            let bookFiltered = data.map(el=>{
                let {id, title, description, image_url, release_year, price, total_page, thickness, created_at, updated_at, category_id} = el
                let bookName = new Books(id, title, description, image_url, release_year, price, total_page, thickness)
                bookName.created_at = created_at
                bookName.updated_at = updated_at
                bookName.categoty_id = category_id
                return bookName
            })
            // console.log(bookFiltered);
            return res.json(bookFiltered)
        })  
    }
    



    connectionPool.query("SELECT * FROM book", (err,data) => {
        if(err){
            console.log(err);
            res.sendStatus(500);
            return;
        }
        let books = data.map(el=>{
            let {id, title, description ,image_url ,release_year ,price ,total_page,thickness ,created_at,updated_at,category_id} = el;
            let newBook = new Books(id,title,description,image_url,release_year,price,total_page,thickness)
            newBook.created_at= created_at
            newBook.updated_at= updated_at
            newBook.category_id= category_id
            return newBook;
        })
        return res.json(books)
    })
}
export const getBookById = (req, res) => {
    let {id} = req.params
    connectionPool.query(`SELECT * FROM book WHERE id=${id}`, (err,data) => {
        if(err){
            console.error(err);
            return;
        }
        // console.log(data)
            let {id, title,description ,image_url ,release_year ,price ,total_page,thickness ,created_at,updated_at,category_id} = data[0]
            let newBook = new Books(id,title)
            newBook.description = description
            newBook.image_url= image_url
            newBook.release_year = release_year
            newBook.price = price
            newBook.total_page = total_page
            newBook.thickness = thickness
            newBook.created_at= created_at
            newBook.updated_at= updated_at
            newBook.category_id= category_id
            return res.json(newBook)
        })
    }
export const createBook = (req, res) => {
    let {title, description, image_url, release_year, price, total_page, category_id} = req.body
    let thickness ="";
    if (total_page <= 100 ) {
        thickness="tipis";
      } else if (total_page <= 200 && total_page >= 101) {
        thickness="sedang";
      } else if (total_page >= 201) {
        thickness="tebal";
      } else {
        console.log('Nilai tidak valid');
      }
    // if (validUrl.isUri(image_url)) {
    // console.log('Looks like an URI');
    // }
    // else {
    // console.log('Not a URI');
    // return res.status(400).json({ err: "Bukan URL" });
    // }

    // let regexp = /^(?:(?:https?|ftp):\/\/)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})))(?::\d{2,5})?(?:\/\S*)?$/;
    // if (regexp.test(image_url)) {
    //     return true;
    // } else {
    //     return false;
    // }

    // String.prototype.isValidUrl = function() {
    //     var regex = /(http|https):\/\/(\w+:{0,1}\w*)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%!\-\/]))?/;
    //     return !!regex .test(this)
    //   }

    // if (!isValidUrl(image_url)) {
    //     return res.status(400).json({ err: "image_url value is not URL" });
    // }
    if (!isValidUrl(image_url) || release_year >= 2021 || release_year < 1980) {
      return res.status(400).json({ err: "input release year between 1980-2021 & image just URL" });
    } else {
    connectionPool.query(`INSERT INTO book 
    (title, description, image_url, release_year, price, total_page, thickness, category_id) VALUES 
    ('${title}','${description}','${image_url}',${release_year},'${price}',${total_page},'${thickness}',${category_id})`, 
    (err,data) => {
        if(err){
            console.error(err);
            return;
        }
        console.log(data)
        return res.json("create berhasil")
    })}
}
export const updateBook = (req, res) => {
    let {title, description, image_url, release_year, price, total_page, category_id} = req.body
    let {id} = req.params
    let thickness ="";
    if (total_page <= 100 ) {
        thickness="tipis";
      } else if (total_page <= 200 && total_page >= 101) {
        thickness="sedang";
      } else if (total_page >= 201) {
        thickness="tebal";
      } else {
        console.log('Nilai tidak valid');
      }

      if (!isValidUrl(image_url) || release_year >= 2021 || release_year < 1980) {
        return res.status(400).json({ err: "input release year between 1980-2021 & image just URL" });
      } else {
    connectionPool.query(`UPDATE book SET 
        title='${title}', 
        description='${description}', 
        image_url='${image_url}', 
        release_year=${release_year}, 
        price='${price}', 
        total_page=${total_page},
        thickness='${thickness}',
        category_id=${category_id}
        updated_at=NOW() WHERE id=${id}`, 
        (err,data) => {
        if(err){
            console.error(err);
            return;
        }
        console.log(data)
        return res.json("update berhasil")
    })}
}
export const deleteBook = (req, res) => {
    let {id} = req.params
    connectionPool.query(`DELETE FROM book WHERE id=${id}`, 
        (err,data) => {
        if(err){
            console.error(err);
            return;
        }
        console.log(data)
        return res.json("delete berhasil")
    })
}

export const isValidUrl = image_url=> {
    try { 
        return Boolean(new URL(image_url)); 
    }
    catch(e){ 
        return false; 
    }
}
// const isValidURL(image_url) {
//     let validUrl = /^(?:(?:https?|ftp):\/\/)(?:\S+(?::\S*)?@)?(?:(?!10(?:\.\d{1,3}){3})(?!127(?:\.?\d{1,3}){3})(?!169\.254(?:\.\d{1,3}){2})(?!192\.168(?:\.\d{1,3}){2})(?!172\.(?:1[?6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1?,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00?a1-\uffff0-9]+-?)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]+-?)*[a-z\u?00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})))(?::\d{2,5})?(?:\/[^\s]*)?$/i;
//     return validUrl(image_url);
//   }