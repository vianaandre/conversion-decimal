import Validation from './Validacao.js'

export default function binary() {
    const inputDecimal = document.getElementById('inputDecimal')
    const outputBinario = document.getElementById('outputBinario')
    var numberBinary = ""

    function translate(number) {
        while (number > 0) {
            if (number % 2 == 0) {
                numberBinary += "0"
            } else if (number % 2 > 0) {
                numberBinary += "1"
            }

            number = Math.floor(number / 2)
        }
    }
    this.exitBinary = function () {

        Validation(inputDecimal)

        translate(inputDecimal.value)

        const exit = numberBinary.split('').reverse().join('')

        outputBinario.value = exit

        numberBinary = ""
    }
}