//unfinished

var a = '5 plus i 3'.match(/(plus\si)/gi);



function wordy(text){
  var numbers = text.split(' ').filter(word => word.match(/[0-9]/)).map(Number);
  var operator = text.split(' ').filter(word => word.match(/(plus)|(minus)|(multiplied)|(divided)/));

  var operation = {
    plus: function(a, b){
      return a + b;
    },
    minus: function(a, b){
      return a - b;
    }
  }

  var i = 0;
  return numbers.reduce((prev, next) => {
    
    return operation[plus].call(null, prev, next);
  })
}

console.log(wordy('12 plus 2'));
