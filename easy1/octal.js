function octalToDecimal(number){

  var total = 0,
      num = number.toString(),
      l = 0;

  for(var i = num.length - 1 ; i >= 0 ; i--){
    total += num[l] * Math.pow(8, i);
    l++;
  }

  return total;
}


console.log(octalToDecimal(10));