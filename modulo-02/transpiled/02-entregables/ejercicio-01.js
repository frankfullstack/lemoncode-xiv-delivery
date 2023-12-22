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
console.log("Result of headTypeResult constant from Head type: ".concat(tailTypeResult));
// Typed function (b)
function tailTypedFunction(values) {
    var last = values.slice(1);
    return last;
}
console.log("Result of Typed function: ".concat(tailTypedFunction(INPUT_TAIL_VALUES)));
export {};
