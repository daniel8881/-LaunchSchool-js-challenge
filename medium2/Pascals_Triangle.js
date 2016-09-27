//[1], [1,1], [1,2,1], [1,3,3,1]

//base is [[1]]
//base 沒有左右可加，因此利用tier 來完成，最後也變成最左與最右的1



function pascalTriangle(numTiers) {

    var triangle = [[1]],
        tier;

    for (var j = 0; j < numTiers - 1; j++) {
        //left 1
        tier = [1];
        
        //why k = 1, because tier[0] is 1
        for (var k = 1; k < triangle[j].length; k++) {
            tier[k] = triangle[j][k] + triangle[j][k - 1];
        }

        //right 1
        tier.push(1); //[1,1]
        triangle.push(tier);

    }

    return triangle;
}

console.log(pascalTriangle(4));
