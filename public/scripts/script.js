import form from './modal.js'

const modal = new form()

// chamando a função de validation para um evento
document.getElementById('buttonConverte').addEventListener('click', modal.validacao)

// chamando a função de erro para o erro de um input
document.getElementById('inputDecimal').addEventListener('focus', modal.erro)

console.log('pegando..')
