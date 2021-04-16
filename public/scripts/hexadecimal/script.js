import decimal from './Decimal.js';
import binary from './Binary.js';
import octal from './Octal.js';

const Decimal = new decimal();
const Binary = new binary();
const Octal = new octal();

const form = document.getElementById('form');


form.addEventListener('submit', (e) => {
    e.preventDefault();

    Decimal.exitDecimal()
    Binary.exitBinary()
    Octal.exitOctal()
})