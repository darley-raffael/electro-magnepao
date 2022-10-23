const bntCounter1 = document.querySelector('.bnt-counter1')
const bntCounter2 = document.querySelector('.bnt-counter2')
const bntCounter3 = document.querySelector('.bnt-counter3')

const counter1 = document.querySelector ('.counter1')
const counter2 = document.querySelector ('.counter2')
const counter3 = document.querySelector ('.counter3')

bntCounter1.addEventListener('click', ()=>{
    let counterNumber = Number(counter1.textContent)
    counter1.textContent = (++counterNumber)
    
})

bntCounter2.addEventListener('click', ()=>{
    let counterNumber = Number(counter2.textContent)
    counter2.textContent = (++counterNumber)
    
})

bntCounter3.addEventListener('click', ()=>{
    let counterNumber = Number(counter3.textContent)
    counter3.textContent = (++counterNumber)
    
})

