// importação das biblioetas
const express = require('express');


// função para manipulação de rotas
const app = express.Router();


// rota get para docente
app.get('/get', (req, res) => {
  res.send('Você está na rota get para cliente.');
});

// rota put para docente
app.put('/put', (req, res) => {
  res.send('Você está na rota put para docente.');
});

// rota para o médoto post
app.post('/post', (req, res) => {
    res.send('Você está na rota post para docente.');
  });

// rota para o médoto delete
app.delete('/delete', (req, res) => {
    res.send('Você está na rota delete para docente.');
  });

module.exports = app;