
function perFectNumber(num){

  var divisors = [];
  var sum = 0;
  for(var i = 1; i <= Math.ceil(num / 2); i++){
    if(num % i === 0){
      divisors.push(i);
    }
  }

  console.log(divisors);
 
  sum = divisors.reduce((a,b) => {
    return a + b;
  }, 0)

  
 

  if(sum === num){
    return 'perfect';
  } else if(sum < num){
    return 'deficient';
  } else {
    return 'abundant';
  }
}


console.log(perFectNumber(12));