import utils from '../utils.js';
import decimal from './Decimal.js';

const Utils = new utils();
const Decimal = new decimal();

export default function binary () {
    const outputBinary = document.getElementById('outputBinary')

    this.exitBinary = function () {
        let numberOctal = Decimal.exitDecimal()

        let exitBinary = ""

        while (numberOctal > 0) {
            if (numberOctal % 2 == 0) {
                exitBinary += "0"
            } else if (numberOctal % 2 > 0) {
                exitBinary += "1"
            }
    
            numberOctal = Math.floor(numberOctal / 2)
        }

        const exit = Utils.invertion(exitBinary)

        outputBinary.value = exit
    }
   
}