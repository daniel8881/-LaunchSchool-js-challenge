

function anagram(word, list){

  return list.filter(item => {
    return word.toLowerCase() === item.toLowerCase().split('').sort().join('');
  })
  
}



console.log(anagram('ant', ['tan', 'stand', 'at']));