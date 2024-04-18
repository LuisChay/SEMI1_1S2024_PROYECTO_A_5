const { json } = require('express')
const express = require('express')
const routes = express.Router()
const AWS = require('aws-sdk')
const fs = require('fs')
const { text } = require('body-parser')

require('dotenv').config();

AWS.config.update({
    region: process.env.AWS_REGION,
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY
})

//Instancia de translate
const translate = new AWS.Translate(
    {
        accessKeyId: process.env.AWS_ACCESS_KEY_ID_TRANSLATE,
        secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY_TRANSLATE,
        region: process.env.AWS_REGION
    } 
);


  // Función para traducir texto utilizando Amazon Translate
  async function translateText(text, language) {
    try {
      const params = {
        SourceLanguageCode: 'auto', // Se acepta cualquier idioma de origen
        TargetLanguageCode: language, // Código del idioma de destino
        Text: text //Texto a traducir
      };
  
      const data = await translate.translateText(params).promise();
      return data.TranslatedText; // Texto traducido
    } catch (error) {
      console.error('Error al traducir el texto:', error);
      throw error;
    }
  }



routes.post('/funcion/traduccion', (req, res) => {
    translateText(req.body.texto,req.body.idioma)
    .then(text => {
        return res.status(200).json({traduccion:text})
    })
    .catch(error => {
        console.log("Error",error)
        return res.status(200).json({traduccion:"Ocurrió un error en la traducción, intente más tarde."})
        
      });
    
})