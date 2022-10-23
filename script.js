const bntCounter = document.querySelector('.bnt-counter1')
const txt1 = document.querySelector('.counter1')
let counterNumber = 0
console.log(typeof(txt1))
bntCounter.addEventListener('click', ()=>{
    txt1.textContent = (++counterNumber)
})

