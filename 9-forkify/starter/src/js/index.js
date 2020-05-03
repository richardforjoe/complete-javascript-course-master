// Global app controller
import string from './models/Search'; //import an exported value, current folder + module name
//import {add as addition, multiply, ID} from './views/searchView';
import * as searchView from './views/searchView';

console.log(`Using imported functions! ${searchView.add(searchView.ID, 2)} and ${searchView.multiply(3,5)}. ${string}`)