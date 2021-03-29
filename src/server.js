const express = require('express');
const app = express();
const routes = express.Router()

// servindo os arquivos static
app.use(express.static('public')) 

// servindo o arquivo index.html da pasta views 
app.get('/', (req, res) => res.sendFile(__dirname + '/views/index.html'));


app.listen(3003, () => {
    console.log('Rodando...')
})

console.log(__dirname)