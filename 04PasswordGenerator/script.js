const resultEl = document.getElementById('result')
const lengthEl = document.getElementById('length')
const uppercaseEl = document.getElementById('uppercase')
const lowercaseEl = document.getElementById('lowercase')
const numbersEl = document.getElementById('numbers')
const symbolsEl = document.getElementById('symbols')
const generateEl = document.getElementById('generate')
const clipboardEl = document.getElementById('clipboard')


let num = "0123456789"
let symbol = "#$%&'()*+,-./:;<=>?@[\\]^_`{|}~\d"
let upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
let lower = "abcdefghijklmnopqrstuvwxyz"


// Event Lisner to copy password to Clipbord
clipboardEl.addEventListener('click', () => {
    let reault = document.querySelector('#result')
    navigator.clipboard.writeText(reault.innerText)
    alert(`${reault.innerText}  is coppied in your clipbord!!!`)
})

// Cvent Lisner to put the password in the dom
generateEl.addEventListener('click', () => {
    document.querySelector('#result').innerHTML = generatePassword(lengthEl.value)
})


// Method to genarate a random password
function generatePassword(length) {
    var result = '';
    var characters = `${uppercaseEl.checked?upper:''}${lowercaseEl.checked?lower:''}${numbersEl.checked?num:''}${symbolsEl.checked?symbol:''}`;
    var charactersLength = characters.length;
    for (var i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() *
            charactersLength));
    }
    return result;
}


