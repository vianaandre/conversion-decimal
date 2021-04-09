import Validation from './Validacao.js'

export default function hexadecimal () {
    const inputDecimal = document.getElementById('inputDecimal')
    const outputHexadecimal = document.getElementById('outputHexadecimal')
    var numberHexa = ""

    function letras (letra) {
        switch(letra) {
            case 10:
                letra = "A"
            break
            case 11:
                letra = "B"
            break
            case 12:
                letra = "C"
            break
            case 13:
                letra = "D"
            break
            case 14:
                letra = "E"
            break
            case 15:
                letra = "F"
            break
        }
        return letra
    }

    function translate (number) {
        while (number > 0) {
            if(number % 16 == 0) {
                numberHexa += "0"
            }
            else if(number % 16 > 0) {
                const nova = number - (Math.floor(number / 16) * 16)

                if(nova >= 10) {
                    numberHexa += letras(nova)
                    console.log(nova)
                }
                else if(nova < 10) {
                    numberHexa += nova
                }
            }

            number = Math.floor(number / 16)
        }
    }

    this.exitHexadecimal = function () {
        Validation(inputDecimal)

        translate(inputDecimal.value)

        const exit = numberHexa.split('').reverse().join('')

        outputHexadecimal.value = exit

        numberHexa = ""
    }
}