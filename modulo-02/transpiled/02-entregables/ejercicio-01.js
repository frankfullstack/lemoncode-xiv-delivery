console.log("************** DELIVERABLE 01 *********************");
/*****************
 * Head Function *
 *****************/
// Example input values
var INPUT_HEAD_VALUES = [10, 5, 18, 23, 57];
// Function declaration
function head(values) {
    var first = values[0], _ = values.slice(1);
    return first;
}
console.log("Input values: ".concat(INPUT_HEAD_VALUES));
console.log("Result of head function declaration: ".concat(head(INPUT_HEAD_VALUES)));
// Function expression
var head2 = function (values) {
    var first = values[0], _ = values.slice(1);
    return first;
};
console.log("Result of head2 function expression: ".concat(head2(INPUT_HEAD_VALUES)));
var headTypeResult = 10; // You can try updating this value
console.log("Result of headTypeResult constant from Head type: ".concat(headTypeResult));
// Typed function (b)
function headTypedFunction(values) {
    var first = values[0], _ = values.slice(1);
    return first;
}
console.log("Result of Typed function: ".concat(headTypedFunction(INPUT_HEAD_VALUES)));
/*****************
 * Tail Function *
 *****************/
// Example input values
var INPUT_TAIL_VALUES = [10, 5, 18, 23, 57];
// Function declaration
function tail(values) {
    var last = values.slice(1);
    return last;
}
console.log("Input values: ".concat(INPUT_TAIL_VALUES));
console.log("Result of tail function declaration: ".concat(tail(INPUT_TAIL_VALUES)));
// Function expression
var tail2 = function (values) {
    var last = values.slice(1);
    return last;
};
console.log("Result of tail2 function expression: ".concat(tail2(INPUT_TAIL_VALUES)));
var tailTypeResult = [5, 18, 23, 57]; // You can try updating this value
console.log("Result of tailTypeResult constant from Head type: ".concat(tailTypeResult));
// Typed function (b)
function tailTypedFunction(values) {
    var last = values.slice(1);
    return last;
}
console.log("Result of Typed function: ".concat(tailTypedFunction(INPUT_TAIL_VALUES)));
/*****************
 * Init Function *
 *****************/
// Example input values
var INPUT_INIT_VALUES = [10, 5, 18, 23, 57];
// Function declaration
function init(values) {
    return values.slice(0, -1);
}
console.log("Input values: ".concat(INPUT_INIT_VALUES));
console.log("Result of init function declaration: ".concat(init(INPUT_INIT_VALUES)));
// Function expression
var init2 = function (values) {
    return values.slice(0, -1);
};
console.log("Result of init2 function expression: ".concat(init2(INPUT_INIT_VALUES)));
// Typed function
function initTypedFunction(values) {
    return values.slice(0, -1);
}
console.log("Result of Typed function: ".concat(initTypedFunction(INPUT_INIT_VALUES)));
/*****************
 * Last Function *
 *****************/
// Example input values
var INPUT_LAST_VALUES = [10, 5, 18, 23, 57];
// Function declaration (a)
function last(values) {
    // Options:
    // or return values.slice(-1).pop(),
    // or return values.at(-1);
    return values[values.length - 1];
}
console.log("Input values: ".concat(INPUT_LAST_VALUES));
console.log("Result of last function declaration: ".concat(last(INPUT_LAST_VALUES)));
// Function expression
var last2 = function (values) {
    return values[values.length - 1];
};
console.log("Result of last2 function expression: ".concat(last2(INPUT_LAST_VALUES)));
// Typed function
function lastTypedFunction(values) {
    return values[values.length - 1];
}
console.log("Result of Typed function: ".concat(lastTypedFunction(INPUT_LAST_VALUES)));
export {};
