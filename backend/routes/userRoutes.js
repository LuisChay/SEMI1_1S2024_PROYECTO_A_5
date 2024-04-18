const { json } = require('express')
const express = require('express')
const userRoutes = express.Router()
require('dotenv').config();

// -------------------------------------- REGISTRO DE USUARIOS ---------------------------------------
userRoutes.post('/registro', (req, res) => {
    req.getConnection((err, connect) => {
        if (err) {
            return res.status(404).json({
                "status": false,
                error: "error de conexión con la base de datos"
            });
        }

        connect.query('CALL insertUser(?, ?, ?, @errorCode)', [req.body.user_email, req.body.user_name, req.body.user_password], (err, rows) => {
            if (err) {
                console.log(err)
                return res.status(400).json({ "error": err });
            }

            connect.query('SELECT @errorCode AS errorCode', (err, result) => {
                if (err) {
                    console.log(err)
                    return res.status(400).json({ "error": err });
                }

                const errorCode = result[0].errorCode;

                if (errorCode === -1) {
                    return res.status(200).json({ "success": false, "message": "El correo electrónico ya está registrado" });
                } else {
                    return res.status(200).json({ "success": true });
                }
            });
        });
    })
})

// -------------------------------------------- LOGIN -----------------------------------------------
userRoutes.post('/login', (req, res) => {
    req.getConnection((err, connect) => {
        if (err) {
            return res.status(404).json({
                "status": false,
                error: "error de conexión con la base de datos"
            });
        } else {
            connect.query('SELECT validateLogin(?, ?) AS success;', [req.body.user_email, req.body.user_password], (err, rows) => {
                if (err) {
                    return res.status(400).json({ error: err });
                } else {
                    // La BD retorna 1 y 0, entonces lo paso a true y false para que el front lo reconozca
                    if (rows[0]['success'] == 1) {
                        rows[0]['success'] = true
                    } else if (rows[0]['success'] == 0) {
                        rows[0]['success'] = false
                    }

                    return res.status(200).json(rows[0]);
                }
            })
        }
    })
})

// -------------------------------------------- Mostrar información -----------------------------------------------
userRoutes.post('/userInfo', (req, res) => {
    req.getConnection((err, connect) => {
        if (err) {
            return res.status(404).json({
                "status": false,
                error: "error de conexión con la base de datos"
            });
        } else {
            connect.query('SELECT user_email, user_name FROM user WHERE user_email = ?', [req.body.user_email], (err, rows) => {
                if (err) {
                    return res.status(400).json({ error: err });
                } else {
                    return res.status(200).json(rows[0]);
                }
            })
        }
    })
})
module.exports = userRoutes