import axios from "axios";
import { parameter } from '../config';

export default class Search {
    //define constructor method
    constructor(query) {
        this.query = query;
    }


async getSearchResults() { // async functions return a promise
     
     try {
        //const parameter = "q"
        const result = await axios(`https://forkify-api.herokuapp.com/api/search?${parameter}=${this.query}`);
        this.recipes = result.data.recipes    
        //console.log(this.recipes); 
     } catch (error) {
        console.log(error); 
     }
     
     
}
}