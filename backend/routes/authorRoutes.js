const { json } = require('express')
const express = require('express')
const authorRoutes = express.Router()
require('dotenv').config();

// -------------------------------------------- Listar Autores  -----------------------------------------------
authorRoutes.get('/authors', (req, res) => {
    req.getConnection((err, connect) => {
        if (err) {
            return res.status(404).json({
                "status": false,
                error: "error de conexión con la base de datos"
            });
        } else {
            connect.query('SELECT author_id, author_name FROM author;', [], (err, rows) => {
                if (err) {
                    return res.status(400).json({ error: err });
                } else {
                    return res.status(200).json(rows);
                }
            })
        }
    })
})

// -------------------------------------------- Filtrar libros por autor ------------------------------------

authorRoutes.get('/book/by/author/:authorId', (req, res) => {
    req.getConnection((err, connect) => {
        if (err) {
            return res.status(404).json({
                "status": false,
                error: "error de conexión con la base de datos"
            });
        } else {
            connect.query('SELECT b.book_id, b.book_name, b.book_cover, a.author_name \
            FROM book_author ba \
            JOIN book b ON ba.fk_book_id = b.book_id \
            JOIN author a ON ba.fk_author_id = a.author_id \
            WHERE ba.fk_author_id = ?;'
                , [req.params.authorId], (err, rows) => {
                if (err) {
                    return res.status(400).json({ error: err });
                } else {
                    return res.status(200).json(rows);
                }
            })
        }
    })
})

// --------------------------------------- Búsqueda de libros por nombre de autor ------------------------------------

authorRoutes.post('/search/author', (req, res) => {
    req.getConnection((err, connect) => {
        if (err) {
            return res.status(404).json({
                "status": false,
                error: "error de conexión con la base de datos"
            });
        } else {
            let val = "%" + req.body.author_name + "%"
            connect.query('SELECT a.author_name, a.author_description, a.author_picture, b.book_id, b.book_name, b.book_cover, b.book_description \
            FROM book_author ba \
            JOIN book b ON ba.fk_book_id = b.book_id \
            JOIN author a ON ba.fk_author_id = a.author_id \
            WHERE a.author_name LIKE ?;'
                , [val], (err, rows) => {
                if (err) {
                    return res.status(400).json({ error: err });
                } else {
                    return res.status(200).json(rows);
                }
            })
        }
    })
})

module.exports = authorRoutes