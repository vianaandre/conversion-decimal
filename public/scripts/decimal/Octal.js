import utils from '../utils.js';

const Utils = new utils();

export default function octal () {
    const inputDecimal = document.getElementById('inputDecimal')
    const outputOctal = document.getElementById('outputOctal')
    var numberOctal = ""

    this.exitOctal = () => {
        let numberDecimal = inputDecimal.value

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

        numberOctal = ""
    }
}