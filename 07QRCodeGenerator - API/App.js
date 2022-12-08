let inp = document.querySelector('#input')
let btn = document.querySelector('#submit')
let img = document.querySelector('#img')


btn.addEventListener('click', ()=>{
    img.style.display = "block"
    img.src = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${inp.value}`
})
