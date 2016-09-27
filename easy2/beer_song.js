
function BeerSong(){
  this.verse = function(number){
    var result = '';
    if(number === 0){
      result += "No more bottles of beer on the wall, no more bottles of beer.\nGo to the store and buy some more, 99 bottles of beer on the wall.\n"
    }else if(number === 1){
      result +=  "1 bottle of beer on the wall, 1 bottle of beer.\nTake it down and pass it around, no more bottles of beer on the wall.\n"
    }else if(number === 2){
      result += "2 bottles of beer on the wall, 2 bottles of beer.\nTake one down and pass it around, 1 bottle of beer on the wall.\n"
    }else{
      result += number + " bottles of beer on the wall, " + number + " bottles of beers.\n" + "Take one down and pass it around, " + (number - 1) + " bottles of beer on the wall.\n"
    }
    return result;
  }

  this.verses = function(start, end){
    var result = [];
    for(var i = start; i >= end; i--){
      
      result.push(this.verse(i));
    }
    return result.join('\n');
  }

  this.lyrics = function(){
    return this.verses(99, 0);
  }
}


var song = new BeerSong();
console.log(song.lyrics());




