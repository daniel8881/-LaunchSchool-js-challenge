//就像是給你一個數字，要用硬幣表示

//I 1
//V 5
//X 10
//L 50
//C 100
//D 500
//M 1000

//4, 40, 400, 4000
//9, 90, 900

// no need to > 3000

//idea 列出all的rules in obj
//iterate obj to see how many of rules



function roamnNum(num) {
    
    var romanNumeral = "";
    var rLetters;

    var values = {
      M  : 1000,
      CM : 900,
      D  : 500,
      CD : 400,
      C  : 100,
      XC : 90,
      L  : 50,
      XL : 40,
      X  : 10,
      IX : 9,
      V  : 5,
      IV : 4,
      I  : 1
    }

    Object.keys(values).forEach(letter => {
      rLetters = Math.floor(num / values[letter]);
      if(rLetters !== 0){
        romanNumeral += createRomanNum(rLetters, letter);
        num -= rLetters * values[letter];
      }
      
    })

    function createRomanNum(times, letter){
      var romanNum = Array(times + 1).join(letter);
      return romanNum;
    }

    return romanNumeral;
}

console.log(roamnNum(40));