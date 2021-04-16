import utils from '../utils.js';

const Utils = new utils()

export default function octal () {
    const outputDecimal = document.getElementById('outputDecimal')
    const inputOctal = document.getElementById('inputOctal')

    this.exitDecimal = function() {
        let numberOctal = Utils.invertion(inputOctal.value)

        let numberExit = 0 

        for(let i = 0; i < numberOctal.length; i++) {
            const operation = (numberOctal.substr(i, 1)) * (8**i)

            numberExit += operation
        }

        outputDecimal.value = numberExit

        return numberExit
    }
}