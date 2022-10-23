const bntCounter1 = document.querySelector('.bnt-counter1')
const bntCounter2 = document.querySelector('.bnt-counter2')
const bntCounter3 = document.querySelector('.bnt-counter3')

const counter1 = document.querySelector ('.counter1')
const counter2 = document.querySelector ('.counter2')
const counter3 = document.querySelector ('.counter3')

let counterNumber = 0 
bntCounter1.addEventListener('click', ()=>{
    counter1.textContent = (++counterNumber)
    
})

bntCounter2.addEventListener('click', ()=>{
    counter2.textContent = (++counterNumber)
    
})

bntCounter3.addEventListener('click', ()=>{
    counter3.textContent = (++counterNumber)
    
})

