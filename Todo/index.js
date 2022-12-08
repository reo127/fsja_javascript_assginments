let input = document.querySelector('.input');
let btn = document.querySelector('.addButton');
let container = document.querySelector('.container');


btn.addEventListener('click', () => {
    // Add new todo 
    if( input.value === ''){
        alert('Place enter your task')
    }else{ 
        container.innerHTML += `<div class="item_input"> ${input.value}
       <span class="deleteButton">Delete</span>
       </div>`
    }

    // Remove 
    let remove = document.querySelectorAll('.deleteButton');
    for(let i = 0; i < remove.length; i++){
        remove[i].onclick = function() {
            this.parentNode.remove();
        }
    }


    input.value = ''
})



let update = document.querySelectorAll('.editButton')












































// // Add todos in array
// const addTodo = (todo) => {
//     if(todo.length == 0){
//         alert('Place enter your Todo')
//     }else{
//         container.innerHTML += ` <div class="item">
//         <p class=" item_input"> ${todo} </p>
//         <div class="buttons">
//          <span class="editButton">EADIT</span>
//          <span class="deleteButton">DELETE</span>
//      </div>`
//     }
// }
// btn.addEventListener('click', () => {
//     addTodo(input.value);
// })


