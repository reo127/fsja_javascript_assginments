let inp = document.querySelector('.joke')
let btn = document.querySelector('.btn')


let url = "https://api.chucknorris.io/jokes/random";
const jokes = async () => {
    const res = await fetch(url)
    let joke = await res.json()
    document.querySelector('.joke').innerHTML = joke.value
}

btn.addEventListener('click', jokes)
