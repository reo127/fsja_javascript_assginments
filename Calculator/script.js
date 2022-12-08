function insert(num){
  document.querySelector('.textview').value+=num
  }
  
  function equals(){
    let inp = document.querySelector('.textview').value
    let totle = eval(inp.toString())
    document.querySelector('.textview').value = totle
      
  }
  
  function clean(){
    document.querySelector('.textview').value = 0
  }
  
  function back(){
    let arr = document.querySelector('.textview').value.split('')
    arr.pop()
    document.querySelector('.textview').value = arr.join('')
  }