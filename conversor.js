const Modalfunctions = {
    // criando nossas variáveis para utilizar dentro do objeto
    number: 560,
    number_binaria: "",
    number_octal: "", 
    number_hexadecimal: "",

    binario(number) {
        number = this.number
        var divisao = number
        while (divisao > 0) {
            // criando primeiro a estruta de controle
            if (divisao % 2 == 0) {
                this.number_binaria += "0"
            } else if (divisao % 2 > 0) {
                this.number_binaria += "1"
            }
            divisao = Math.floor(divisao / 2) // arrendondando para o valor menor 
        }
    },
    octal(number) {
        number = this.number
        var divisao = number

        while(divisao > 0) {
            if(divisao % 8 == 0) {
                this.number_octal += "0"
            }
            else if(divisao % 8 > 0) {
                const atual = divisao
                const nova  = atual - ((Math.floor(divisao / 8)) * 8)
                this.number_octal += nova
            }

            divisao = Math.floor(divisao / 8)
        }
    },
    // função criada especialmente para as conversões em bexadecimal
    letras(letra) {
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
        }

        return letra
    },
    hexadecimal(number) {
        number = this.number
        var divisao = number

        while(divisao > 0) {
            if(divisao % 16 == 0) {
                this.number_hexadecimal += '0'
            }else if(divisao % 16 > 0) {
                const atual = divisao
                const nova = atual - ((Math.floor(divisao / 16)) * 16) 
                console.log(nova)
                if(nova >= 10) {
                    this.number_hexadecimal += this.letras(nova)
                }else if(nova < 10) {
                    this.number_hexadecimal += nova
                }
            }
            divisao = Math.floor(divisao / 16)
        }
        console.log(this.number_hexadecimal)
    }

}
const ModalConfiguration = {
    invertion() {
        // chamando a funçaõ binaria dentro do objeto ModalFunctions
        Modalfunctions.hexadecimal()
    
        // invertendo a string
        const binario_apresentation = Modalfunctions.number_hexadecimal.split('').reverse().join('')
    
        console.log(binario_apresentation)
    },
    implementationLetras() {
        // essa função irá implementar as letras em conversoes hexadecimal
    }
}

// chamando a função
// ModalConfiguration.invertion()
//ModalConfiguration.invertion()
///Modalfunctions.hexadecimal()
ModalConfiguration.invertion()




