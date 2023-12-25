console.log("************** DELIVERABLE 03 *********************");

/*******************
 * Clone Function *
 *******************/

interface User {
    firstName: string;
    lastName: string;
    mail: string;
}
const USER_INPUT_FOR_CLONE: User = {
    firstName: "Jonh",
    lastName: "Doe",
    mail: "jonh.doe@mail.com"
};

// Clone function declaration

export function clone<T>(source: T):T {
    return { ...source };
}

console.log(clone<User>(USER_INPUT_FOR_CLONE));

// Clone function expression

const clone2 = <T>(source: T):T => {
    return { ...source };
}

console.log(clone2<User>(USER_INPUT_FOR_CLONE));

// Clone alternative (a)
const clone3 = <T>(source: T):T => {
    return Object.assign({}, source);
}

console.log(clone3(USER_INPUT_FOR_CLONE));

// Clone alternative (b)
const clone4 = <T>(source: T):T => {
    return JSON.parse(JSON.stringify(source));
}

console.log(clone4(USER_INPUT_FOR_CLONE));


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

