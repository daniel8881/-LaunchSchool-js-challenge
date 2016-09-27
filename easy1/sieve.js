
//find all the primes form 2 up to a given number
//use Sieve of Eratosthenes

//困難點再於如何把數值從array中刪除，然後選中下一項
//idea: 
//先產出一個陣列從2~num
//再產出一個陣列存放用來除的質數
//每次某個數被當作除數就加入temp array，然後從原本的陣列移除




function findPrime(num){

  var result = [];
  var temp = [];
  for(var i = 2; i <= num; i++){
    result.push(i);
  }
  
  var limit = 2;
  while(limit * limit < num){
  
    
    temp.push(limit);
    
    result = result.slice(1).filter(item => {
      return item % limit !== 0;
    } )

    limit = result[0];
  }

  return temp.concat(result);
  
}

console.log(findPrime(100000).length);

//終止條件是原本的數字陣列都空掉了，全部都被拿進prime陣列

function primes(num){

  var numbers = [];
  var prime = [];
  for(var i = 2; i <= num; i++){
    numbers.push(i);
  }

  while(numbers.length !== 0){
    var nextPrime = numbers.shift();
    prime.push(nextPrime);
    numbers = numbers.filter(item => {
      return item % nextPrime !== 0;
    })

  }

  return prime;
}

console.log(primes(100000).length);

//solution 1 效能較好

//double for loop solution


function findPrime(n){
    var primlist = [];
    for(var i = 2; i <= n; i++){
        primlist.push(i);
    }

    for(var j = 0; j < primlist.length; j++){
        if(primlist[j]){
            for(var k = j + 1; k < primlist.length; k++){
                
                if(primlist[k] % primlist[j] === 0){
                    primlist[k] = false;
                }
            }
        }

    }

    return primlist.filter(x => x);
}

console.log(findPrime(1000));