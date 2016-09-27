
//point 規則太多 qu
//use regex

function pigLatin(text) {
    var vowels = ['a', 'e', 'i', 'o', 'u'];
    var words = text.split(' ');
    return words.map(word => {
            if (vowels.indexOf(word[0]) > -1) {
                return word + 'ay';
            } else {
                for (var i = 0; i < word.length; i++) {
                    if (vowels.indexOf(word[i]) > -1) {
                        var consonant = word.slice(0, i);
                        return word.slice(i).concat(consonant) + 'ay';
                    }
                }
            }
        }
    ).join(' ');
}

console.log(pigLatin('xray'));