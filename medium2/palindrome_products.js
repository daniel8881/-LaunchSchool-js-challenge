//1. how to find the product quickly
//2. also have to tell the factors like 9009, [91, 90]


function palindrome(maxF, minF){

  var largest, smallest;

  function isPalindrome(n){
    return n.toString().split('').reverse().join('') === n.toString();
  }
  
  var max = -Infinity;
  var min = Infinity;
  
  for(var i = minF; i <= maxF; i++){
    for(var j = i; j <= maxF; j++){
      var value = i * j;
      
      if(isPalindrome(value)){
        if(value > max){
          max = value;
          largest = {
            value: value,
            factor: [i, j]
          }
        }
        if(value < min){
          min = value;
          smallest = {
            value: value, 
            factor: [i, j]
          }
        }
      }
    }
  }

  return {
    largest: largest,
    smallest: smallest
  }

}


console.log(palindrome(99, 10));