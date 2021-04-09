export default function validation (number) {
    const componente = document.getElementById('componenteInput')
    if(number.value == undefined || number.value == null || isNaN(number.value)) {
        componente.style.borderTop = 'red solid 2px'
        componente.style.borderRight = 'red solid 2px'
        componente.style.borderBottom = 'red solid 2px' 
    }else {
        componente.style.border = 'none'
    }
}