// função construtura que vai conter duas funções, onde uma será para erro e outra para a validação
export default function form() {
    this.validacao = function() {
        var inputDecimal = document.getElementById('inputDecimal')

        const numberDecimal = inputDecimal.value

        // validando a entrada 
        if (numberDecimal != Number) {
            componenteInput.style.border = 'solid 2px red'
            inputDecimal.style.color = 'red'
            inputDecimal.value = 'Digite um Number'
        } else {
            return numberDecimal
        }
    },
    this.erro = function() {
        var componenteInput = document.getElementById('componenteInput')

        // aplicar none a border 
        componenteInput.style.border = 'none'
        // setar para branco a font 
        inputDecimal.style.color = 'white'
        // limpar o campo de input 
        inputDecimal.value = ''
    }
}