

document.addEventListener('DOMContentLoaded', function(){

  const input = document.getElementById("input");
  let currentOperation = null; 
  let currentValue = ''; 
 
  document.querySelectorAll(".btn.number").forEach(button => {
    button.addEventListener('click', function() {
      input.value += this.getAttribute("data-num");
      currentValue += this.getAttribute("data-num");
    })
  })

  document.querySelectorAll(".btn.operation").forEach(button => {
    button.addEventListener('click', function() {
      if (this.getAttribute("data-ops") === "result"){
        calculateResult();
      } else {
        currentOperation = this.getAttribute("data-ops");
        if (currentValue !== '') {
          input.value += ' ' + this.textContent + ' ';
          currentValue = '';
      }
      }
    })
  })

  document.querySelector(".btn.reset").addEventListener('click', function(){
    input.value = '';
    currentOperation = null;
    currentValue = '';

  })

  function calculateResult() {
    let expression = input.value.split(' ');
    let result = parseFloat(expression[0]);
  
    for (let i = 1; i < expression.length; i += 2) {
      let operator = expression[i];
      let nextValue = parseFloat(expression[i + 1]);
  
      switch (operator) {
        case '+':
          result += nextValue;
          break;
        case '-':
          result -= nextValue;
          break;
        case '*':
          result *= nextValue;
          break;
        case '/':
          if (nextValue !== 0) {
            result /= nextValue;
          } else {
            alert("Error: División por cero.");
            result = 'Error';
            break;
          }
          break;
        default:
          alert("Error en la operación.");
          break;
      }
    }
  
    if (result !== 'Error') {
      input.value = result;
      currentValue = result.toString();  
    } else {
      input.value = ''; 
      currentValue = '';
    }
    currentOperation = null; 
  }
  
});