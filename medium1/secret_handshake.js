//covert 10 to binary
//detemined ones, tens, hundreds is 1?

//idea:將十進位轉換成二進位然後變成陣列去處理


function handShake(num){
  

  var digits = num.toString(2).split('').reverse().map(Number);
  var handshake = ['wink', 'double blink', 'close your eyes', 'jump'];
  var result = [];
  
  for(var i = 0; i < 4; i++){
    if(digits[i] === 1){
      result.push(handshake[i]);
    }
  }

  if(digits[4] === 1){
    return result.reverse();
  }else{
    return result;
  }
}

console.log(handShake('11001'));