const { json } = require('express')
const express = require('express')
const bookRoutes = express.Router()
require('dotenv').config();

// -------------------------------------------- Listar Todos los libros  -----------------------------------------------
bookRoutes.get('/books', (req, res) => {
    req.getConnection((err, connect) => {
        if (err) {
            return res.status(404).json({
                "status": false,
                error: "error de conexión con la base de datos"
            });
        } else {
            connect.query('SELECT b.book_id, b.book_name, b.book_description, b.book_cover, a.author_name \
            FROM book b \
            JOIN book_author ba ON b.book_id = ba.fk_book_id \
            JOIN author a ON ba.fk_author_id = a.author_id;', [], (err, rows) => {
                if (err) {
                    return res.status(400).json({ error: err });
                } else {
                    return res.status(200).json(rows);
                }
            })
        }
    })
})

// -------------------------------------------- Mostrar información del libro y del autor  ------------------------------------

bookRoutes.get('/book/by/id/:bookId', (req, res) => {
    req.getConnection((err, connect) => {
        if (err) {
            return res.status(404).json({
                "status": false,
                error: "error de conexión con la base de datos"
            });
        } else {
            connect.query('SELECT b.book_id, b.book_name, b.book_description, b.book_cover, \
                a.author_name, a.author_description, a.author_picture \
                FROM book b \
                LEFT JOIN book_author ba ON b.book_id = ba.fk_book_id \
                LEFT JOIN author a ON a.author_id = ba.fk_author_id \
                    WHERE b.book_id = ?; ', [req.params.bookId], (err, rows) => {
            console.log(err)
            if (err) {
                return res.status(400).json({ error: err });
            } else {
                return res.status(200).json(rows);
            }
        })
}
    })
})

// ------------------------- Mostrar los géneros que tiene el libro ----------------------------------
bookRoutes.get('/book/genre/:bookId', (req, res) => {
    req.getConnection((err, connect) => {
        if (err) {
            return res.status(404).json({
                "status": false,
                error: "error de conexión con la base de datos"
            });
        } else {
            connect.query('SELECT b.book_id, g.genre_id, g.genre_name \
            FROM book b \
            JOIN book_genre bg ON bg.fk_book_id = b.book_id \
            JOIN genre g ON g.genre_id = bg.fk_genre_id \
            WHERE b.book_id = ?;', [req.params.bookId], (err, rows) => {
            console.log(err)
            if (err) {
                return res.status(400).json({ error: err });
            } else {
                return res.status(200).json(rows);
            }
        })
}
    })
})

// ------------------------- Mostrar los libros por búsqueda  ----------------------------------
bookRoutes.post('/search/book', (req, res) => {
    req.getConnection((err, connect) => {
        if (err) {
            return res.status(404).json({
                "status": false,
                error: "error de conexión con la base de datos"
            });
        } else {
            let val = "%" + req.body.book_name+ "%"
            connect.query('SELECT * FROM book WHERE book_name LIKE ?;', [val], (err, rows) => {
            console.log(err)
            if (err) {
                return res.status(400).json({ error: err });
            } else {
                return res.status(200).json(rows);
            }
        })
}
    })
})

module.exports = bookRoutes