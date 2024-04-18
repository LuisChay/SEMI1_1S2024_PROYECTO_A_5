const { json } = require('express')
const express = require('express')
const textdetectionroutes = express.Router()
const AWS = require('aws-sdk')
const fs = require('fs')
const { text } = require('body-parser')
const textDetection = express.Router()
require('dotenv').config();

AWS.config.update({
  region: process.env.AWS_REGION,
  accessKeyId: process.env.AWS_KEYID,
  secretAccessKey: process.env.AWS_ACCESSKEY
});

// Instancia de Rekognition
const rekognition = new AWS.Rekognition(
    {
    accessKeyId: process.env.AWS_ACCESS_KEY_ID_REKOGNITION,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY_REKOGNITION,
    region: process.env.AWS_REGION
  } 
);


// Función para extraer texto de una imagen base64
async function extractText(base64Image) {
    // Convertir la imagen base64 a Buffer
    const imageBuffer = Buffer.from(base64Image, 'base64');
  
    try {
      // Realizar la llamada a Rekognition para extraer texto
      const params = {
        Image: {
          Bytes: imageBuffer
        }
      };
  
      const response = await rekognition.detectText(params).promise();
  
      // Extraer el texto detectado
      const detectedText = response.TextDetections.map(textDetection => textDetection.DetectedText);
  
      return detectedText;
    } catch (error) {
      console.error('Error al extraer texto de la imagen:', error);
      throw error;
    }
  }

  
  textdetectionroutes.post('/funcion/texto', (req, res) => {
    //console.log(req.body)
    extractText(req.body.foto)
  .then(text => {
    return res.status(200).json({texto:text})
  })
  .catch(error => {
    console.log("Error",error)
    return res.status(200).json({texto:"Ocurrió un error al extraer el texto, intente más tarde."})
    
  });
    
})

module.exports = textdetectionroutes
