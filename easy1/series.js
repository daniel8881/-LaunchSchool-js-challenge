//idea
//use built-in method slice 
//slice(start, end)


function series(string, digit){
  
  if(digit > string.length){
    return string;
  }

  var numArr = string.split('');
 

  for(var i = 0; i < string.length; i++){
    console.log(numArr.slice(i, i + digit));
    if(numArr.length - i < digit + 1){
      break;
    }
  }
}


console.log(series('01234', 1));

//use substr
function series(text, n){
    var result = [];
    for(var i = 0; i + n <= text.length; i++){
        result.push(text.substr(i, n));
    }
    return result;
}

console.log(series('01234', 5));