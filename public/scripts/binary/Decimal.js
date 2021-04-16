import utils from '../utils.js'

const Utils = new utils()

export default function binary () {
    const inputBinary = document.getElementById('inputBinary')
    var outputDecimal = document.getElementById('outputDecimal')

    this.exitBinary = function() {
        const number = Utils.invertion(inputBinary.value)

        let numberDecimal = 0

        for(let i = 0; i < number.length; i++) {
            const operation = (number.substr(i, 1)) * (2**i)

            numberDecimal += operation
        }

        outputDecimal.value = numberDecimal

        return numberDecimal
    }

}