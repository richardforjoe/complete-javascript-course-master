////////////////////////////////
// CODING CHALLENGE

/*

Suppose that you're working in a small town administration, and you're in charge of two town elements:
1. Parks
2. Streets

It's a very small town, so right now there are only 3 parks and 4 streets. All parks and streets have a name and a build year.

At an end-of-year meeting, your boss wants a final report with the following:
1. Tree density of each park in the town (forumla: number of trees/park area)
2. Average age of each town's park (forumla: sum of all ages/number of parks)
3. The name of the park that has more than 1000 trees
4. Total and average length of the town's streets
5. Size classification of all streets: tiny/small/normal/big/huge. If the size is unknown, the default is normal

All the report data should be printed to the console.

HINT: Use some of the ES6 features: classes, subclasses, template strings, default parameters, maps, arrow functions, destructuring, etc.

*/

// Town[name, number of parks, number of streets] - Parks[name, Build Year, number of trees, Park Area], Streets[name, Build Year, length, size: tiny/small/normal/big/huge]

//report[Tree density, Average age, park name > 1000 trees, Total and average length of the town's streets]:


class Town {
    constructor (name, buildYear) {
        this.name = name;
        this.buildYear = buildYear;
    }

    calculateAge() { //Method for class
        console.log(age6s); 
    }


}

class Park extends Town {
    constructor(name, buildYear, numberOfTrees, parkArea){
        super(name, buildYear);
        this.numberOfTrees = numberOfTrees;
        this.parkArea = parkArea;
    }

    treeDensity() {
        const density = this.numberOfTrees/this.parkArea;
        console.log(`${this.name} has a tree density of ${density}`)
    }
} 

class Street extends Town {
    constructor(name, buildYear, length, size=3){
        super(name, buildYear);
        this.length = length;
        this.size = size;
    }

    clasifyStreet() {
        const streetClasification = new Map(); //New empty map
        streetClasification.set(1, 'tiny');
        streetClasification.set(2, 'small');
        streetClasification.set(3, 'normal');
        streetClasification.set(4, 'big');
        streetClasification.set(5, 'huge');

        console.log(`${this.name}, built in ${this.buildYear}, is a ${streetClasification.get(this.size)} street`)
    }
} 

const allParks = [new Park('Green Park',1987,1000,0.2), new Park('National Park', 1894, 3541, 2.9),new Park('Oak Park', 2000, 10541, 5.9)]
const allStreets = [new Street('Swarbrick avenue', 1880,1.1,4),new Street('Swarbrick garden', 1990,1.1,5),new Street('Swarbrick grove', 1980,9.1),new Street('Swarbrick street', 1970,0.1,2)]

function calc(arr){
    // ES5 method to accumulate all values into single value
    const sum = arr.reduce((prev, cur, index) => prev + cur, 0);

    return [sum, sum / arr.length];
}
function reportPark(parks) {

    console.log('----Parks Report----')

    //Density - call treeDensity method for each element
    parks.forEach(element => element.treeDensity());

    //Average age
    const limitTree = 1000;
    const ages = parks.map(el => new Date().getFullYear() - el.buildYear)
    const [totalAge, averageAge] = calc(ages);
    console.log(`The ${parks.length} parks have an average of ${averageAge} years.`)
    //Which park has more than 1000 trees - findindex method
    const index = parks.map(el => el.numberOfTrees).findIndex(el => el >= limitTree)
    console.log(`${parks[index].name} has more than ${limitTree} trees`)

}

function reportStreet(streets) {

    console.log('----Street Report----')

    //Total and average length of the towns streets
    const [totalength, averageLength] = calc(streets.map(el => el.length));
    console.log(`The ${streets.length} streets have a total length of ${totalength} m, and an average of ${averageLength} m`)
    //classify the sizes
    streets.forEach(el => el.clasifyStreet());
}

reportPark(allParks);
reportStreet(allStreets);
