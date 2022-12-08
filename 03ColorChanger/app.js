// Target Elements
let canvas = document.querySelector('#canvas')
let btn = document.querySelector('#button')

// Method for Random Hex Color
function getColor() {
    return (
        "#" + Math.random().toString(16).slice(2, 8)
    );
}

// On click Change canvas color
btn.addEventListener('click', () => {
    canvas.style.backgroundColor = getColor()
})