let text = document.querySelector('#text')
let btn = document.querySelector('#convert-btn')
let camel = document.querySelector('#camel-case')
let pascal = document.querySelector('#pascal-case')
let screamingSnake = document.querySelector('#screaming-snake-case')
let snake = document.querySelector('#snake-case')
let kebab = document.querySelector('#kebab-case')
let screamingKebab = document.querySelector('#screaming-kebab-case')


btn.addEventListener('click', () => {
    camel.innerText = camelCase(text.value)
    pascal.innerText = pascaleCase(text.value)
    snake.innerText = snackCase(text.value)
    screamingSnake.innerText = screamingSnackCase(text.value)
    
    kebab.innerText = kabebCase(text.value)
    screamingKebab.innerText = screamingKebabCase(text.value)
})


// Mothod for Camel Case
function camelCase(str) {
    return str
        .replace(/\s(.)/g, function (a) {
            return a.toUpperCase();
        })
        .replace(/\s/g, '')
        .replace(/^(.)/, function (b) {
            return b.toLowerCase();
        });
}

// Mothod for Pascal Case
function pascaleCase(str) {
    return str
        .replace(/\s(.)/g, function (a) {
            return a.toUpperCase();
        })
        .replace(/\s/g, '')  
}

// Mothod for Snack Case
function snackCase(str){
    return str.replace(/ /g,"_")
    
}

// Mothod for Screaming Snake Case
function screamingSnackCase(str){
    return str.replace(/ /g,"_").toUpperCase()
    
}

// Mothod for kebab Case
function kabebCase(str){
    return str.replace(/ /g,"-")
    
}

// Mothod for Screaming kebab Case
function screamingKebabCase(str){
    return str.replace(/ /g,"-").toUpperCase()
    
}



