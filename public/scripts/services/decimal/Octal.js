import Validation from './Validacao.js'

export default function octal () {
    const inputDecimal = document.getElementById('inputDecimal')
    const outputOctal = document.getElementById('outputOctal')
    var numberOctal = ""

    function translate(number) {
        while(number > 0) {
            if(number % 8 == 0) {
                numberOctal += '0'
            }else if(number % 8 > 0) {
                const nova = number - (Math.floor(number / 8) * 8)
                numberOctal += nova
            }

            number = Math.floor(number / 8)
        }
    }

    this.exitOctal = function () {
        Validation(inputDecimal)

        translate(inputDecimal.value)

        const exit = numberOctal.split('').reverse().join('')

        outputOctal.value = exit

        numberOctal = ""
    }
}