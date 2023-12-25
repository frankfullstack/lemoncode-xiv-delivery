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
