import utils from '../utils.js';
import decimal from './Decimal.js';

const Utils = new utils()
const Decimal = new decimal()

export default function binary () {
    const outputBinary = document.getElementById('outputBinary')

    this.exitBinary = function () {

        let numberDecimal = Decimal.exitDecimal()

        let numberExit = ""

        while (numberDecimal > 0) {
            if (numberDecimal % 2 == 0) {
                numberExit += "0"
            } else if (numberDecimal % 2 > 0) {
                numberExit += "1"
            }

            numberDecimal = Math.floor(numberDecimal / 2)
        }

        const exit = Utils.invertion(numberExit)

        outputBinary.value = exit
    }
}