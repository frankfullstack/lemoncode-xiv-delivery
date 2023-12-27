var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
console.log("************** DELIVERABLE 02 *********************");
/*******************
 * Concat Function *
 *******************/
// Basic example with function declaration
function concat(values1, values2) {
    return __spreadArray(__spreadArray([], values1, true), values2, true);
}
console.log("Result of concat function declaration: ".concat(concat([1, 2, 3], [4, 5, 6])));
// Basic example with function expression
var concatDeclaration = function (values1, values2) {
    return __spreadArray(__spreadArray([], values1, true), values2, true);
};
console.log("Result of concat function expression: ".concat(concat([1, 2, 3], [4, 5, 6])));
// Advanced for multiple arrays function declaration
function concatMultiple() {
    var arr = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        arr[_i] = arguments[_i];
    }
    return arr.reduce(function (prev, next) {
        return __spreadArray(__spreadArray([], prev, true), next, true);
    }, []);
}
console.log("Result of concat multiple function declaration: ".concat(concatMultiple([1, 2, 3], [4, 5, 6], [7, 8, 9])));
// Advanced for multiple arrays function expression
var concatMultiple2 = function () {
    var arr = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        arr[_i] = arguments[_i];
    }
    return arr.reduce(function (prev, next) {
        return __spreadArray(__spreadArray([], prev, true), next, true);
    }, []);
};
console.log("Result of concat multiple function expression: ".concat(concatMultiple([1, 2, 3], [4, 5, 6], [7, 8, 9])));
