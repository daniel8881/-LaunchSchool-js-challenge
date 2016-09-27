

function mutation(dna1, dna2){
  var count = 0;

  for(var i = 0; i < dna1.length; i++){
    if(dna1[i] !== dna2[i]){
      count++;
    }
  }

  return count;
}


console.log(mutation('GGACGGATTCTGACCTGGACTAATTTTGGGG', 'AGGACGGATTCTGACCTGGACTAATTTTGGGG'));