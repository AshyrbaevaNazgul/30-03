// ||  &&  ``  []  "" %  №  ?  =
const input = document.getElementById('input')
const plusBtn = document.getElementById('plus_button')
const minusBtn = document.getElementById('minus_button')
const mathOperationBtn = document.getElementById('operation_button')
plusBtn.addEventListener('click', ()=>{
    const currentValue = parseInt(input.value)
    input.value = currentValue + 1
})
minusBtn.addEventListener('click', ()=>{
    const currentValue = parseInt(input.value)
    input.value = currentValue - 1
})
function mathOperation(array,operation){
    const result = array.map(operation)
    return result
}
mathOperationBtn.addEventListener("click",()=>{
    const inputarray = [1,2,3,4,5]
    const operationresult = mathOperation(inputarray, (element)=>element + 2)
    alert(`результат ${operationresult}`)
})
