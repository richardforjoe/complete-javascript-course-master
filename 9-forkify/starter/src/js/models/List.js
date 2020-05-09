//Shopping list as an object - class as blueprint to generate list object
import uniqid from 'uniqid'

export default class List {
    constructor() { //nothing is passed when class is initialiased
    this.items = [] //items property set to array
    }

    //library will be used to create unique id's - uniqid 
    addItem (count, unit, ingredient) {//method to add new items
        const item = {
                    id: uniqid(),        
                    count,
                    unit,
                    ingredient
    }
    this.items.push(item);
    return item;
    }

    deleteItem (id) { // ability to delete item in array using splice. - start index
        //[2,4,8] splice (1,2) -> returns 4, 8, original array is [2]] - Splice
        //[2,4,8] splice (1,2) -> returns 4, original array is [2,4,8]] - Slice [Start & end but end not included]
        //this.items.splice(id) 
        
        // find position if item matching id
        const index = this.items.findIndex(el => el.id === id);
        this.items.splice(index, 1) //splice mutates original array
    }

    updateCount(id, newCount) {
        this.items.find(el => el.id === id).count = newCount;
    }
}

