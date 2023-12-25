var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
console.log("************** DELIVERABLE 03 *********************");
var USER_INPUT_FOR_CLONE = {
    firstName: "Jonh",
    lastName: "Doe",
    mail: "jonh.doe@mail.com"
};
// Clone function declaration
function clone(source) {
    return __assign({}, source);
}
console.log(clone(USER_INPUT_FOR_CLONE));
// Clone function expression
var clone2 = function (source) {
    return __assign({}, source);
};
console.log(clone2(USER_INPUT_FOR_CLONE));
// Clone alternative (a)
var clone3 = function (source) {
    return Object.assign({}, source);
};
console.log(clone3(USER_INPUT_FOR_CLONE));
// Clone alternative (b)
var clone4 = function (source) {
    return JSON.parse(JSON.stringify(source));
};
console.log(clone4(USER_INPUT_FOR_CLONE));
