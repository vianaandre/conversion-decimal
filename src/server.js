var express = require('express');
var path = require('path');
var routes = require('./routes');

var app = express();

app.set('view engine', 'ejs')

app.use(express.static('public'))

app.set(express.urlencoded({ extend: true }))

// falando sobre o caminho absoluto 
app.set('views', path.join(__dirname, 'views'))

app.use(routes)

var porta = process.env.PORT || 8080;
app.listen(porta, () => {
    console.log('Rodando...' + porta)
})
