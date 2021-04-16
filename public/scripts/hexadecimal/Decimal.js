import utils from '../utils.js'; 

const Utils = new utils();

export default function decimal () {
    const inputHexadecimal = document.getElementById('inputHexadecimal')
    const outputDecimal = document.getElementById('outputDecimal')
    const vetorNumber = []
    
    function transpila (input) {
        const inputVetor = input.toLowerCase()
        const vetorInput = inputVetor.split('')


        for(let i = 0; i < vetorInput.length; i++) {
            const getTrasnforme = Utils.numbers(vetorInput[i])

            vetorNumber.push(getTrasnforme)
        }
        return vetorNumber
    }

    this.exitDecimal = function () {
        const numberHexa = transpila(inputHexadecimal.value).reverse()

        let numberExit = 0

        for(let i = 0; i < numberHexa.length; i++) {
            const operation = (numberHexa[i] * (16**i))

            numberExit += operation
        }

        
        outputDecimal.value = numberExit

        vetorNumber.length = 0

        return numberExit
    }
}