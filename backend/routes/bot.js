const { json } = require('express')
const express = require('express')
const botroutes = express.Router()
const AWS = require('aws-sdk')
const fs = require('fs')
const { text } = require('body-parser')

require('dotenv').config();

AWS.config.update({
  region: process.env.AWS_REGION,
  accessKeyId: process.env.AWS_KEYID,
  secretAccessKey: process.env.AWS_ACCESSKEY
});


//Instancia de lex
const lexruntime = new AWS.LexRuntimeV2({
    accessKeyId: process.env.AWS_ACCESS_KEY_ID_LEX,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY_LEX,
    region: process.env.AWS_REGION
  });



  botroutes.post('/funcion/chatbot',async (req, res) => {
    const params = {
      botAliasId: "TSTALIASID",
      botId: "UNKPVVTFPD",
      localeId: "es_419",
      text: req.body.message,
      sessionId: "767397934319812"
    };
  
    try {
      const data = await lexruntime.recognizeText(params).promise();
      res.json(data);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
    
  })
  
  module.exports = botroutes  