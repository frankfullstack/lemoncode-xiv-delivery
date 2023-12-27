console.log("************** DELIVERABLE 02 *********************");

/*******************
 * Concat Function *
 *******************/

// Basic example with function declaration
function concat<T>(values1: T[], values2: T[]): T[] {
    return [...values1, ...values2];
}

console.log(`Result of concat function declaration: ${concat([1,2,3], [4,5,6])}`);

// Basic example with function expression
const concatDeclaration = <T>(values1: T[], values2: T[]): T[] => {
    return [...values1, ...values2];
}

console.log(`Result of concat function expression: ${concat([1,2,3], [4,5,6])}`);

// Advanced for multiple arrays function declaration

function concatMultiple<T>(...arr: Array<T[]>):T[] {
    return arr.reduce((prev, next) => {
        return [...prev, ...next];
    }, [])
}

console.log(`Result of concat multiple function declaration: ${concatMultiple([1,2,3], [4,5,6], [7,8,9])}`);

// Advanced for multiple arrays function expression

const concatMultiple2 = <T>(...arr: Array<T[]>):T[] => {
    return arr.reduce((prev, next) => {
        return [...prev, ...next];
    }, [])
}

console.log(`Result of concat multiple function expression: ${concatMultiple([1,2,3], [4,5,6], [7,8,9])}`);

