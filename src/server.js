const express = require('express');
const app = express();
const routes = express.Router()

// servindo os arquivos static
app.use(express.static('public')) 

// setando o view engine com ejs para renderizar meus arquivos 
app.set('view engine', 'ejs')

// quando se utiliza o ejs com renderizador, o comando sendFile é inutil, porque você não vai servir um arquivo e sim renderizar um
// servindo o arquivo index.html da pasta views 
app.get('/', (req, res) => res.render(__dirname + '/view/index'));


app.listen(3003, () => {
    console.log('Rodando...')
})
