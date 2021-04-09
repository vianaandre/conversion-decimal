const express = require('express');
const app = express();

app.set('view engine', 'ejs')

app.use(express.static('public'))

const model = {
    dadosDecimal: {
        idInput: 'inputDecimal',
        inputBase: 10,
        outputBases: {
            Base1: 2,
            Base2: 8, 
            Base3: 16
        }, 
        outputId: {
            Id1: 'outputBinario',
            Id2: 'outputOctal',
            Id3: 'outputHexadecimal'
        }, 
    },
    dadosBinario: {
        idInput: 'inputBinary',
        inputBase: 2,
        outputBases: {
            Base1: 10,
            Base2: 8, 
            Base3: 16
        }, 
        outputId: {
            Id1: 'outputDecimal',
            Id2: 'outputOctal',
            id3: 'outputHexadecimal'
        }, 
    }, 
    dadosOctal: {
        idInput: 'inputOctal',
        inputBase: 8,
        outputBases: {
            Base1: 10,
            Base2: 2, 
            Base3: 16
        }, 
        outputId: {
            Id1: 'outputDecimal',
            Id2: 'outputBinario',
            id3: 'outputHexadecimal'
        },
    },
    dadosHexadecimal: {
        idInput: 'inputHexadecimal',
        inputBase: 16,
        outputBases: {
            Base1: 10,
            Base2: 2, 
            Base3: 8
        }, 
        outputId: {
            Id1: 'outputDecimal',
            Id2: 'outputBinario',
            id3: 'outputOctal'
        },
    }
}



app.get('/', (req, res) => {
    res.render(__dirname + '/views/index', { dados: model.dadosDecimal })
})

// criando as routes para determinados objetoss
app.get('/2', (req, res) => {
    res.render(__dirname + '/views/index', { dados: model.dadosBinario })
})

app.get('/8', (req, res) => {
    res.render(__dirname + '/views/index', { dados: model.dadosOctal })
})

app.get('/16', (req, res) => {
    res.render(__dirname + '/views/index', { dados: model.dadosHexadecimal })
})


app.listen(2001, () => {
    console.log('Rodando...')
})
