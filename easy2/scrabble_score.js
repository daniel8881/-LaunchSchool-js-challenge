//如何選擇正確的資料結構
//string中每個letter要個別處理，看看match到obj的哪個pair
function score(string){

  var values = {
    1: ['a','e','i','o','u','l','n','r','s','t'],
    2: ['d','g'],
    3: ['b','c','m','p'],
    4: ['f','h','v','w','y'],
    5: ['k'],
    8: ['j','x'],
    10: ['q','z']
  }

  var text = string.toLowerCase().replace(/\s/g, '').split('');
  
  var scoreTable = text.map(letter => {
    for(var prop in values){
      if(values[prop].indexOf(letter) > -1){  
        return prop;
      }
    }
  })

  return scoreTable.reduce((a,b) => Number(a) + Number(b));

}


console.log(score("cabbage"));



function score(text){
  var map = {
    aeioulnrst : 1,
    dg : 2,
    bcmp : 3,
    fhvwy : 4,
    k : 5,
    jx : 8,
    qz: 10
  }

  var scorelist = text.toLowerCase().split('');
  var list = Object.keys(map);
  return scorelist.map(letter => {
    var point;
    list.forEach(text => {
      if(text.indexOf(letter) > -1){
        point =  map[text];
      }
    })
    return point;
  }).reduce((a,b) => a + b);

  
}


console.log(score('cabbage'));