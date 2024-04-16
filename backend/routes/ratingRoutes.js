const { json } = require('express')
const express = require('express')
const ratingRoutes = express.Router()
require('dotenv').config();

// -------------------------------------- REGISTRO DE CALIFICACION ---------------------------------------
ratingRoutes.post('/setRating', (req, res) => {
    req.getConnection((err, connect) => {
        if (err) {
            return res.status(404).json({
                "status": false,
                error: "error de conexión con la base de datos"
            });
        }

        connect.query('CALL insertRating( ?, ?, ?, ? );', [req.body.rating_value, req.body.rating_comment, req.body.book_id, req.body.user_email], (err, rows) => {
            if (err) {
                return res.status(200).json({ "success": false, "error": err });
            } else {
                return res.status(200).json({ "success": true });
            }
        });
    })
})

// -------------------------------------------------- OBTENER PROMEDIO DE CALIFICACIONES -------------------------------------------
ratingRoutes.get('/getRatings', (req, res) => {
    req.getConnection((err, connect) => {
        if (err) {
            return res.status(404).json({
                "status": false,
                error: "error de conexión con la base de datos"
            });
        }

        connect.query('SELECT b.book_id, AVG(r.rating_value) AS average_rating \
            FROM book b \
            JOIN rating r ON b.book_id = r.fk_book_id \
            GROUP BY b.book_name;', [], (err, rows) => {
            if (err) {
                return res.status(200).json({ "success": false, "error": err });
            } else {
                return res.status(200).json(rows);
            }
        });
    })
})

// --------------------------------- OBTENER PROMEDIO DE CALIFICACION DE UN LIBRO POR SU ID  -------------------------------------------
ratingRoutes.get('/getRating/:bookId', (req, res) => {
    req.getConnection((err, connect) => {
        if (err) {
            return res.status(404).json({
                "status": false,
                error: "error de conexión con la base de datos"
            });
        }

        connect.query('SELECT b.book_id, AVG(r.rating_value) AS average_rating \
            FROM book b \
            JOIN rating r ON b.book_id = r.fk_book_id \
            WHERE b.book_id = ?;', [req.params.bookId], (err, rows) => {
            if (err) {
                return res.status(200).json({ "success": false, "error": err });
            } else {
                return res.status(200).json(rows);
            }
        });
    })
})


// --------------------------------- OBTENER CALIFICACIONES Y RESEÑAS DE UN LIBRO POR SU ID  -------------------------------------------
ratingRoutes.get('/ratings/:bookId', (req, res) => {
    req.getConnection((err, connect) => {
        if (err) {
            return res.status(404).json({
                "status": false,
                error: "error de conexión con la base de datos"
            });
        }

        connect.query('SELECT b.book_id, r.rating_value AS average_rating, r.rating_comment, u.user_email \
            FROM book b \
            JOIN rating r ON b.book_id = r.fk_book_id \
            JOIN user u ON u.user_email = r.fk_user_email \
            WHERE b.book_id = ?;', [req.params.bookId], (err, rows) => {
            if (err) {
                return res.status(200).json({ "success": false, "error": err });
            } else {
                return res.status(200).json(rows);
            }
        });
    })
})


// ----------------------------- OBTENER RESEÑAS HECHAS POR UN USUARIO POR SU CORREO  -------------------------------------------
ratingRoutes.get('/user/ratings', (req, res) => {
    req.getConnection((err, connect) => {
        if (err) {
            return res.status(404).json({
                "status": false,
                error: "error de conexión con la base de datos"
            });
        }

        connect.query('SELECT b.book_id, b.book_name, r.rating_value AS average_rating, r.rating_comment \
            FROM book b \
            JOIN rating r ON b.book_id = r.fk_book_id \
            JOIN user u ON u.user_email = r.fk_user_email \
            WHERE u.user_email = ?;', [req.body.user_email], (err, rows) => {
            if (err) {
                return res.status(200).json({ "success": false, "error": err });
            } else {
                return res.status(200).json(rows);
            }
        });
    })
})
module.exports = ratingRoutes
