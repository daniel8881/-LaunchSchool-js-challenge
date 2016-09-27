function arrayMode(sequence) {
   
    var count = {};
    sequence.forEach(item => {
      count[item] = count[item] || 0;
      count[item]++;
    })

   
   var most =  Object.keys(count).reduce((a, b) => {
       if(count[a] > count[b]){
           return a;
       }else{
           return b;
       }
   }) 

   console.log(most);
   
   return most;
}

console.log(arrayMode([1,2,3,1]));