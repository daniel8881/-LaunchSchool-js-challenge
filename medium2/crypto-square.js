//remove the spaces and punctuation


function Crypto(text){
  
  this.normalizePlaintext = function(){
    return text.replace(/[^a-z0-9]/gi, '').toLowerCase();
  }

  this.size = function(){
    var size;
    var len = this.normalizePlaintext().length;
    console.log(len);
    if(Math.sqrt(len) % 1 === 0){
      size = Math.sqrt(len);
    }else{
      size = Math.ceil(Math.sqrt(len));
    }
    return size;
  }

  this.plaintextSegments = function(){
    var result = [];
    var size = this.size();
    var text = this.normalizePlaintext();
    for(var i = 0; i < text.length; i += size){
      result.push(text.slice(i, i + size));
    }
    return result;
  }

  this.normalizeCiphertext = function(){
    var segment = this.plaintextSegments().map(x => x.split(''));
    
    var result = [];
    var temp;

    for(var i = 0; i < segment[0].length; i++){
      temp = [];
      for(var j = 0; j < segment.length; j++){
          temp.push(segment[j][i]);
      }
      result.push(temp);
    }
    return result.map(x => x.join('')).join(' ');
  }

  this.ciphertext = function(){
    return this.normalizeCiphertext().replace(/\s+/g, '');
  }
}


var pwd = new Crypto('We all know interspecies romance is weird.');
console.log(pwd.ciphertext());