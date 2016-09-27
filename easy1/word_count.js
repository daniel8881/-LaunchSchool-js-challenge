
function wordCount(text){

  var textArr = text.split(' ');
  return textArr.reduce((obj, word) => {
    obj[word] = obj[word] || 0;
    obj[word] += 1;
    return obj;
  }, {})
}

console.log(wordCount("olly olly in come free"));