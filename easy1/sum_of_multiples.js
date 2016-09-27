//困難處：傳入不定的參數

function sumOfMultiples() {

    var arr = [];
    var multiples = [];
    var arg = Array.prototype.slice.call(arguments);
    var num = arg.shift();



    for (var i = 1; i < num; i++) {
        arr.push(i);
    }

    if (arg.length) {
        while (arg.length) {

            for (var j = 0; j < arr.length; j++) {

                if (j % arg[0] === 0) {
                    multiples.push(j);
                }
            }
            arg.shift();
        }
    } else {
       for (var k = 0; k <= arr.length; k++) {

                if (k % 3 === 0 || k % 5 === 0) {
                    multiples.push(k);
                }
            }
    }

    console.log(multiples);

    multiples = multiples.filter((item, idx) => {
        return multiples.indexOf(item) === idx;
    })

    return multiples.reduce((a, b) => {
        return a + b;
    }, 0);
}

console.log(sumOfMultiples(20, 7, 13, 17));