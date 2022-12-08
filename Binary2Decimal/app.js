



function toDecimal(v) {
    let decimal = parseInt(v, 2)
    return decimal;
  }

document.querySelector('.btn').addEventListener('click', () => {
    let binary = document.querySelector('#binary')
    let result = document.querySelector('.result')
    result.innerHTML = toDecimal(binary.value)
    
})



