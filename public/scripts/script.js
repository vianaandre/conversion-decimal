// importações
import binary from './services/decimal/Binary.js'
import octal from './services/decimal/Octal.js' 
import hexadecimal from './services/decimal/Hexadecimal.js'

// instanciamento 
const Binario = new binary()
const Octal = new octal()
const Hexadecimal = new hexadecimal()

// pegando elemento
const buttonAction = document.getElementById('buttonConverte')

// prevenindo o eveto de submit do form
buttonAction.addEventListener('click', (e) => {
    e.preventDefault()
})
// mandado ouvir os eventos para as transformações de decimais
buttonAction.addEventListener('click', Binario.exitBinary)
buttonAction.addEventListener('click', Octal.exitOctal)
buttonAction.addEventListener('click', Hexadecimal.exitHexadecimal)


