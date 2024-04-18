const express = require('express');
const pollyroutes = express.Router();
const AWS = require('aws-sdk');

require('dotenv').config();

// Configuración de las credenciales específicas para Polly
const Polly = new AWS.Polly({
    accessKeyId: process.env.AWS_ACCESS_KEY_ID_POLLY,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY_POLLY,
    region: process.env.AWS_REGION // Asegúrate de proporcionar la región correcta
});

// Función para convertir el audio a base64
function audioToBase64(audioStream) {
    try {
        const base64String = audioStream.toString('base64');
        return base64String;
    } catch (error) {
        console.error('Error al convertir audio a base64:', error);
        return null;
    }
}


pollyroutes.post('/funcion/polly', async (req, res) => {
    const { message } = req.body; // Aquí obtenemos el texto del campo 'message' del cuerpo de la solicitud

    const params = {
        Text: message, // Usamos el texto del campo 'message'
        OutputFormat: 'mp3',
        VoiceId: 'Conchita' // Puedes elegir una voz de la lista de voces disponibles en Polly
    };

    try {
        const data = await Polly.synthesizeSpeech(params).promise();
        const base64Audio = audioToBase64(data.AudioStream);
        res.json({ audio: base64Audio });
    } catch (error) {
        console.error('Error al sintetizar voz:', error);
        res.status(500).json({ error: 'Error al sintetizar voz' });
    }
});

module.exports = pollyroutes;
