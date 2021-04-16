import decimal from './Decimal.js';
import utils from '../utils.js'

const Utils = new utils()
const Decimal = new decimal()

export default function octal () {
    const outputOctal = document.getElementById('outputOctal')

    this.exitOctal = function() {
        let numberDecimal = Decimal.exitBinary()

        let numberOctal = ''

        while(numberDecimal > 0) {
            if(numberDecimal % 8 == 0) {
                numberOctal += '0'
            }else if(numberDecimal % 8 > 0) {
                const nova = numberDecimal - (Math.floor(numberDecimal / 8) * 8)
                numberOctal += nova
            }

            numberDecimal = Math.floor(numberDecimal / 8)
        }

        const exit = Utils.invertion(numberOctal)

        outputOctal.value = exit
    }


}