function trinary(string){

  var decimal = 0;
  var number = stringToDigit(string);

  for(var i = 0; i < string.length; i++){
    decimal += Math.floor(number / Math.pow(10, i)) % 10 * Math.pow(3, i);
  }

  return decimal;
}


function stringToDigit(string){
  var number = 0;
  var digit = [0,1,2,3,4,5,6,7,8,9];
  var idx = string.length - 1;
  for(var i = 0; i < string.length; i++){
    number += digit[string[idx]] * Math.pow(10, i); 
    idx--;
  }

  return number || 0;
}
