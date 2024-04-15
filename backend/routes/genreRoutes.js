const { json } = require('express')
const express = require('express')
const genreRoutes = express.Router()
require('dotenv').config();

// -------------------------------------------- Listar Géneros  -----------------------------------------------
genreRoutes.get('/genres', (req, res) => {
    req.getConnection((err, connect) => {
        if (err) {
            return res.status(404).json({
                "status": false,
                error: "error de conexión con la base de datos"
            });
        } else {
            connect.query('SELECT * FROM genre;', [], (err, rows) => {
                if (err) {
                    return res.status(400).json({ error: err });
                } else {
                    return res.status(200).json(rows);
                }
            })
        }
    })
})

// -------------------------------------------- Filtrar libros por género ------------------------------------

genreRoutes.get('/book/by/genre/:genreId', (req, res) => {
    req.getConnection((err, connect) => {
        if (err) {
            return res.status(404).json({
                "status": false,
                error: "error de conexión con la base de datos"
            });
        } else {
            connect.query('SELECT b.book_id, b.book_name, b.book_cover, a.author_name \
            FROM book_genre bg \
            JOIN book b ON bg.fk_book_id = b.book_id \
            JOIN book_author ba ON b.book_id = ba.fk_book_id \
            JOIN author a ON ba.fk_author_id = a.author_id \
            WHERE bg.fk_genre_id = ?;'
                , [req.params.genreId], (err, rows) => {
                if (err) {
                    return res.status(400).json({ error: err });
                } else {
                    return res.status(200).json(rows);
                }
            })
        }
    })
})

module.exports = genreRoutes