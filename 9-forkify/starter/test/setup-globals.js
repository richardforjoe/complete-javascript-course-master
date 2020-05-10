/* eslint-disable no-undef */
global.test = test
global.expect = expect

async function test(title, callback) {
    try {
        await callback();
        console.log(`√ ${ title}`)
    } catch (error) {
        console.error(`✖ ${title}`);
        console.error(error);
    }
    }
    
    function expect(actual) { //assertion library function
        return {
            toBe(expected) {
                if (actual !== expected) {
                    throw new Error(`${actual} is not equal to ${expected}`) 
                }
            },
            toEqual(expected) {
                if (!actual === expected) {
                    throw new Error(`${actual} is not deep equal to ${expected}`) 
                }
            },
            toBeGreaterThan(expected) {
                if (actual < expected) {
                    throw new Error(`${actual} is not greater than  ${expected}`) 
                }            
            }
        }
    }

