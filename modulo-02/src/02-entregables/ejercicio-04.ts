import { clone } from "./ejercicio-03.js";

console.log("************** DELIVERABLE 04 *********************");

/*******************
 * Merge Function *
 *******************/

interface User {
    firstName: string;
    lastName: string;
    mail: string;
}

const USER_INPUT1_FOR_MERGE: User = {
    firstName: 'John',
    lastName: 'Doe',
    mail: 'jonh.doe@mail.com'
};

const USER_INPUT2_FOR_MERGE: User = {
    firstName: 'Jane',
    lastName: 'Doe',
    mail: 'jane.doe@mail.com'
}; 

// Merge function declaration
function merge<T>(target:T, source: T): T {
    return clone({...target, ...source});
}

console.log(USER_INPUT1_FOR_MERGE, USER_INPUT2_FOR_MERGE, merge(USER_INPUT1_FOR_MERGE, USER_INPUT2_FOR_MERGE))

// Merge function expression
const mergeExpression = <T>(target:T, source: T): T => {
    return clone({...target, ...source});
}

console.log(USER_INPUT1_FOR_MERGE, USER_INPUT2_FOR_MERGE, mergeExpression(USER_INPUT1_FOR_MERGE, USER_INPUT2_FOR_MERGE))

