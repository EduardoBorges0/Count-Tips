'use strict'
const text = document.querySelector('#context');
const btn = document.querySelector('#btn-calc');
const result = document.querySelector('#result');
result.textContent = 'R$0,00'

function calcular(){
  const value = document.querySelector('#money-dine').value;
  const rate = document.querySelector('#rate').value;
  const amount = document.querySelector('#amount').value;
  if(!value || !rate){
    alert('Preencha os blocos necessários!!')
  }
  else if(!amount && rate && value){
    const calc = (value * (rate / 100));
   result.textContent = `R$${calc.toFixed(2)}`

  }
  else{
    const calcTwo = (value * (rate / 100)) / amount;
    result.textContent = `R$${calcTwo.toFixed(2)}`  
    
}
}
btn.addEventListener('click', calcular )