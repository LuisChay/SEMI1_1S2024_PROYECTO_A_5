const express = require('express');
const comprehendroutes = express.Router();
const AWS = require('aws-sdk');
const bodyParser = require('body-parser');

require('dotenv').config();

// Configuración de las credenciales específicas para Comprehend
const Comprehend = new AWS.Comprehend({
    accessKeyId: process.env.AWS_ACCESS_KEY_ID_COMPREHEND,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY_COMPREHEND,
    region: process.env.AWS_REGION // Asegúrate de proporcionar la región correcta
});

comprehendroutes.use(bodyParser.json());

comprehendroutes.post('/funcion/comprehend', async (req, res) => {
    console.log(req.body.message);
    const params = {
        LanguageCode: 'es',
        Text: req.body.message
    };

    try {
        const data = await Comprehend.detectEntities(params).promise();
        res.json(data.Entities);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

module.exports = comprehendroutes;
