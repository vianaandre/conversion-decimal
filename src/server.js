const express = require('express');
const app = express();
const path = require('path');
const routes = require('./routes');

app.set('view engine', 'ejs')

app.use(express.static('public'))

app.set(express.urlencoded({ extend: true }))


// falando sobre o caminho absoluto 
app.set('views', path.join(__dirname, 'views'))

app.use(routes)

app.listen(2001, () => {
    console.log('Rodando...')
})
