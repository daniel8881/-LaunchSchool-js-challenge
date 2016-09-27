//how to deal with the increasing line
//idea: turn the datastructure into another datastructure
//array into string

function combinePiece(arr){
  var line = "This is ";
  arr.forEach(piece => {
    line += piece[0] + '\n';
    if(piece[1]){
      line += piece[1] + ' ';
    }
  })
  return line;
}



function rhyme(){
  var pieces =  [
      ['the horse and the hound and the horn', 'that belonged to'],
      ['the farmer sowing his corn', 'that kept'],
      ['the rooster that crowed in the morn', 'that woke'],
      ['the priest all shaven and shorn', 'that married'],
      ['the man all tattered and torn', 'that kissed'],
      ['the maiden all forlorn', 'that milked'],
      ['the cow with the crumpled horn', 'that tossed'],
      ['the dog', 'that worried'],
      ['the cat', 'that killed'],
      ['the rat', 'that ate'],
      ['the malt', 'that lay in'],
      ['the house that Jack built']
    ];

    var song = '';
    while(pieces.length > 0){
      song = combinePiece(pieces) + song;
      pieces = pieces.slice(1);
      song = '\n' + song;
    }
    return song;

    
  
  
}


console.log(rhyme());