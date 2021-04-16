import utils from '../utils.js';

const Utils = new utils();

export default function binary() {
    const inputDecimal = document.getElementById('inputDecimal')
    const outputBinario = document.getElementById('outputBinario')
    let numberBinary = ""

    this.exitBinary = () => { 
        let numberDecimal = inputDecimal.value
        
        while (numberDecimal > 0) {
            if (numberDecimal % 2 == 0) {
                numberBinary += "0"
            } else if (numberDecimal % 2 > 0) {
                numberBinary += "1"
            }

            numberDecimal = Math.floor(numberDecimal / 2)
        }

        const exit = Utils.invertion(numberBinary)

        outputBinario.value = exit

        numberBinary = ""
    }

}