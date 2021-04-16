import utils from '../utils.js';
import decimal from './Decimal.js';

const Utils = new utils()
const Decimal = new decimal()

export default function octal () {
    const outputOctal = document.getElementById('outputOctal')

    this.exitOctal = function () {
        let numberDecimal = Decimal.exitDecimal()

        let exitOctal = ""

        while(numberDecimal > 0) {
            if(numberDecimal % 8 == 0) {
                exitOctal += '0'
            }else if(numberDecimal % 8 > 0) {
                const nova = numberDecimal - (Math.floor(numberDecimal / 8) * 8)
                exitOctal += nova
            }

            numberDecimal = Math.floor(numberDecimal / 8)
        }

        const exit = Utils.invertion(exitOctal)

        outputOctal.value = exit
    }
}