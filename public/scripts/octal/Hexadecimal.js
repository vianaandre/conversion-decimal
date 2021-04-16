import utils from '../utils.js';
import decimal from './Decimal.js';

const Utils = new utils();
const Decimal = new decimal();


export default function hexadecimal () {
    const outputHexadecimal = document.getElementById('outputHexadecimal')

    this.exitHexadecimal = function () {
        let numberOctal = Decimal.exitDecimal()

        let exitHexa = ""

        while (numberOctal > 0) {
            if(numberOctal % 16 == 0) {
                exitHexa += "0"
            }
            else if(numberOctal % 16 > 0) {
                const nova = numberOctal - (Math.floor(numberOctal / 16) * 16)

                if(nova >= 10) {
                    exitHexa += Utils.letras(nova)
                }
                else if(nova < 10) {
                    exitHexa += nova
                }
            }

            numberOctal = Math.floor(numberOctal / 16)
        }

        const exit = Utils.invertion(exitHexa)

        outputHexadecimal.value = exit
    }
}