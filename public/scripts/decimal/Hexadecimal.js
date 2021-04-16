import utils from '../utils.js';

const Utils = new utils();

export default function hexadecimal () {
    const inputDecimal = document.getElementById('inputDecimal')
    const outputHexadecimal = document.getElementById('outputHexadecimal')
    let numberHexa = ""

    this.exitHexadecimal = () => {
        let numberDecimal = inputDecimal.value

        while (numberDecimal > 0) {
            if(numberDecimal % 16 == 0) {
                numberHexa += "0"
            }
            else if(numberDecimal % 16 > 0) {
                const nova = numberDecimal - (Math.floor(numberDecimal / 16) * 16)

                if(nova >= 10) {
                    numberHexa += Utils.letras(nova)
                }
                else if(nova < 10) {
                    numberHexa += nova
                }
            }

            numberDecimal = Math.floor(numberDecimal / 16)
        }

        const exit = Utils.invertion(numberHexa)

        outputHexadecimal.value = exit

        numberHexa = ""
    }
}