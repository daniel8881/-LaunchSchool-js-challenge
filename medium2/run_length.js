//Regex

function rleEncode(text) {

    var letters = text.match(/(.)\1*/g);

    return letters.map(letters => {
        if (letters.length > 1) {
            return letters.length + letters.match(/./);
        } else {
            return letters;
        }
    }).join('');
}

function rleDecode(text) {

    var msg = '';
    var groups = text.match(/([\d]+)(.{1})|./g);
    var digit, letter;
    groups.forEach(group => {
        if (group.length > 1) {
            digit = +group.match(/[\d]+/g).join('');
            letter = group.match(/[^\d]/).join('');
            msg += Array(digit + 1).join(letter);
        } else {
            msg += group;
        }
    })
    return msg;
}




//imperative
//two pointer
//start_indx, ending_index, current_char

function rleEncode2(input) {
    var result = '';
    var startIdx = 0,
        endIdx = 0,
        curChar = input[startIdx],
        runLength;

    while (endIdx < input.length) {
        while (input[endIdx] === curChar) {
            endIdx++;
        }
        runLength = endIdx - startIdx;
        if (runLength > 1) {
            result += runLength + curChar;
        } else {
          result += curChar;
        }
        startIdx = endIdx;
        curChar = input[startIdx];
    }

    return result;
}

console.log(rleEncode2('AAABBC'));