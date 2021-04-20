const express = require('express');
var favicon = require('express-favicon')
var path = require('path');
const routes = require('./routes');

const app = express();

app.set('view engine', 'ejs')

app.use(express.static('public'))

app.set(express.urlencoded({ extend: true }))

app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')))

// falando sobre o caminho absoluto 
app.set('views', path.join(__dirname, 'views'))

app.use(routes)

var porta = process.env.PORT || 8080;
app.listen(porta, () => {
    console.log('Rodando...' + porta)
})
