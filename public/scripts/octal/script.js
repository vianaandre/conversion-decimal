import decimal from './Decimal.js'
import binary from './Binary.js'
import hexadecimal from './Hexadecimal.js'

const Decimal = new decimal()
const Binary = new binary()
const Hexadecimal = new hexadecimal()

const form = document.getElementById('form');

form.addEventListener('submit', (e) => {
    e.preventDefault()

    Decimal.exitDecimal()
    Binary.exitBinary()
    Hexadecimal.exitHexadecimal()
})