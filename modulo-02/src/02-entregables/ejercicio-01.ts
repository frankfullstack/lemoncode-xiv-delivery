console.log("************** DELIVERABLE 01 *********************");

/*****************
 * Head Function *
 *****************/

// Example input values
const INPUT_HEAD_VALUES = [10, 5, 18, 23, 57];


// Function declaration
function head(values: number[]) {
    const [first, ..._] = values;
    return first;
}

console.log(`Input values: ${INPUT_HEAD_VALUES}`)
console.log(`Result of head function declaration: ${head(INPUT_HEAD_VALUES)}` );

// Function expression
const head2 = (values: number[]) => {
    const [first, ..._] = values;
    return first;
}

console.log(`Result of head2 function expression: ${head2(INPUT_HEAD_VALUES)}` );

// Typed version (a)

type ArrayValues = [10, 5, 18, 23, 57];

type Head<T> = T extends [infer H, ...unknown[]] ? H : never;

const headTypeResult:Head<ArrayValues> = 10; // You can try updating this value

console.log(`Result of headTypeResult constant from Head type: ${headTypeResult}`);

// Typed function (b)

function headTypedFunction<T>(values: T[]): T{
    const [first, ..._] = values;
    return first;
}
console.log(`Result of Typed function: ${headTypedFunction(INPUT_HEAD_VALUES)}`);

/*****************
 * Tail Function *
 *****************/

// Example input values
const INPUT_TAIL_VALUES = [10, 5, 18, 23, 57];


// Function declaration
function tail(values: number[]) {
    const [, ...last] = values;
    return last;
}

console.log(`Input values: ${INPUT_TAIL_VALUES}`)
console.log(`Result of tail function declaration: ${tail(INPUT_TAIL_VALUES)}` );

// Function expression
const tail2 = (values: number[]) => {
    const [, ...last] = values;
    return last;
}

console.log(`Result of tail2 function expression: ${tail2(INPUT_TAIL_VALUES)}` );

// Typed version (a)

type TailArrayValues = [10, 5, 18, 23, 57];

type Tail<T> = T extends [unknown, ...infer Tail] ? Tail : never;

const tailTypeResult:Tail<TailArrayValues> = [5, 18, 23, 57]; // You can try updating this value

console.log(`Result of tailTypeResult constant from Head type: ${tailTypeResult}`);

// Typed function (b)

function tailTypedFunction<T>(values: T[]): T[]{
    const [, ...last] = values;
    return last;
}
console.log(`Result of Typed function: ${tailTypedFunction(INPUT_TAIL_VALUES)}`);

/*****************
 * Init Function *
 *****************/

// Example input values
const INPUT_INIT_VALUES = [10, 5, 18, 23, 57];


// Function declaration
function init(values: number[]) {
    return values.slice(0, -1);
}

console.log(`Input values: ${INPUT_INIT_VALUES}`)
console.log(`Result of init function declaration: ${init(INPUT_INIT_VALUES)}` );

// Function expression
const init2 = (values: number[]) => {
    return values.slice(0, -1);
}

console.log(`Result of init2 function expression: ${init2(INPUT_INIT_VALUES)}` );

// Typed function

function initTypedFunction<T>(values: T[]): T[]{
    return values.slice(0, -1);
}
console.log(`Result of Typed function: ${initTypedFunction(INPUT_INIT_VALUES)}`);

/*****************
 * Last Function *
 *****************/

// Example input values
const INPUT_LAST_VALUES = [10, 5, 18, 23, 57];


// Function declaration (a)
function last(values: number[]) {
    // Options:
    // or return values.slice(-1).pop(),
    // or return values.at(-1);
    return values[values.length-1];
}


console.log(`Input values: ${INPUT_LAST_VALUES}`)
console.log(`Result of last function declaration: ${last(INPUT_LAST_VALUES)}` );

// Function expression
const last2 = (values: number[]) => {
    return values[values.length-1];
}

console.log(`Result of last2 function expression: ${last2(INPUT_LAST_VALUES)}` );

// Typed function

function lastTypedFunction<T>(values: T[]): T{
    return values[values.length-1];
}
console.log(`Result of Typed function: ${lastTypedFunction(INPUT_LAST_VALUES)}`);

