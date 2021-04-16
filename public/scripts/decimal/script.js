// importações
import binary from './Binary.js'
import octal from './Octal.js' 
import hexadecimal from './Hexadecimal.js'

// instanciamento 
const Binario = new binary()
const Octal = new octal()
const Hexadecimal = new hexadecimal()

// pegando elemento do form
const form = document.getElementById('form')


// listando as funções 
form.addEventListener('submit', (e) => {
    e.preventDefault()

    Binario.exitBinary()
    Octal.exitOctal()
    Hexadecimal.exitHexadecimal()
})
