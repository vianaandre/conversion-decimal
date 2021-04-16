import decimal from './Decimal.js'
import octal from './Octal.js'
import hexadecimal from './Hexadecimal.js'


const Octal = new octal()
const Decimal = new decimal()
const Hexadecimal = new hexadecimal()

const form = document.getElementById('form')

form.addEventListener('submit', (e) => {
    e.preventDefault()

    Decimal.exitBinary()
    Octal.exitOctal()
    Hexadecimal.exitHexadecimal()
})