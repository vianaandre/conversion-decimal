export default function utils() {
    this.letras = (number) => {
        switch(number) {
            case 10:
                number = "A"
            break
            case 11:
                number = "B"
            break
            case 12:
                number = "C"
            break
            case 13:
                number = "D"
            break
            case 14:
                number = "E"
            break
            case 15:
                number = "F"
            break
        }
        
        return number
    }

    this.numbers = (letra) => {
        switch(letra) {
            case 'a':
                letra = '10'
            break
            case 'b':
                letra = '11'
            break
            case 'c':
                letra = '12'
            break
            case 'd':
                letra = '13'
            break
            case 'e':
                letra = '14'
            break
            case 'f':
                letra = '15'
            break
        }

        return letra
    }

    this.invertion = (input) => {
        const numberBinary = input.split('').reverse().join('')

        return numberBinary
    }
}