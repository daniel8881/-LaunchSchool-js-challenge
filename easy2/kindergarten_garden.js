//如何選擇資料結構
//如何每個陣列的前兩個push到對應的學生

function kinderGarten(garden, student) {

    var students = {
        alice: [],
        bob: [],
        charlie: [],
        david: [],
        eve: [],
        fred: [],
        ginny: [],
        harriet: [],
        ileana: [],
        joseph: [],
        kincaid: [],
        larry: []
    }

    var planets = {
        V: 'violets',
        G: 'grass',
        C: 'clover',
        R: 'radishes'
    }

    function mapPlanets(arr) {
        return arr.map(item => {
            return planets[item];
        })
    }
    var row1 = mapPlanets(garden.split("\n")[0].split(''));
    var row2 = mapPlanets(garden.split("\n")[1].split(''));
    var idx = 0;

    Object.keys(students).forEach(person => {

       
        students[person].push(row1[idx]);
        students[person].push(row1[idx + 1] );
        students[person].push(row2[idx]);
        students[person].push(row2[idx + 1] );
        idx += 2;

    })

    return students[student];
}


console.log(kinderGarten("VR\nVR", 'alice'));