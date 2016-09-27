//[letter, m-space, len,  o-space]
//[1,       0,       1,     m-len - letter + m-space] 1
//[2,       1,       3] 2
//[2,       3,       5] 3
//[2,       5,       7] 4
//[2,       7,       9] 5

//todo: n === 1

function spaces(n){
  return Array(n + 1).join(' ');
}

function diamond(n){
  var middleLength = (n - 1) * 2 + 1;
  var middleSpaces = 1;
  var arr = [];
  var outerSpaces = (middleLength - 1) / 2 + 1;
  var letter = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','S','T','U','V','W','X','Y','Z'];
  
  for(var i = 0; i < n; i++){
    
    if(i === 0){
      arr.push(spaces(outerSpaces) + letter[i] + spaces(outerSpaces))
    }else{
      outerSpaces--;
      arr.push(spaces(outerSpaces) + letter[i] + spaces(middleSpaces) + letter[i] + spaces(outerSpaces));
      middleSpaces += 2;
    }

  }

  arr = arr.concat(arr.slice(0, n - 1).reverse());
    
  return arr.join('\n');
}

console.log(diamond(5));