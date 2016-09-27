
function revert(string){
  var result = [];
  var text = stayLetter(string);
  text.forEach(letter => {
    result.unshift(letter);
  })

  return result;
}

function stayLetter(string){
  return string.toLowerCase().split('').map(letter => {
    if(letter.charCodeAt(0) > 96 && letter.charCodeAt(0) < 123){
      return letter;
    }
  })
}


function p(string){
  var text = stayLetter(string);
  var reverseString = revert(string);
  return text.join('') === reverseString.join('');
}

console.log(p('ollo'));


