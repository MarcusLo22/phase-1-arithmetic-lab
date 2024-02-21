
// Write your code here
function multiply(num1, num2) {
    return num1 * num2;
  }
  
  let num1 = 31;
  let num2 = 2;
  let result = multiply(num1, num2);
  console.log(result); // Output: 62

  function random() {
   return Math.floor(Math.random() * 100) + 1;
  }
  
  function isNumberGreaterThanZero(number) {
    return number > 0;
  } 
  
  function equation() {
    let isInteger = 7 % 4;
    console.log(isInteger);
  }
  equation();

  function max(set) {
    let max = Math.max(...set);
    return max;
  }
  let numbers = [10, 5, 20, 15];
  let highestNumber = findMaxNumber(numbers);
  console.log(highestNumber);