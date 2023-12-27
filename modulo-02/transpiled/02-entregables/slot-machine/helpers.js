/**
 * Get a boolean random value
 *
 * @param factor number
 * @returns boolean
 */
var randomBoolean = function (factor) {
    return Math.random() < factor;
};
/**
 * Returns true if all the tuple values are true
 *
 * @param values [boolean, boolean, boolean]
 * @returns boolean
 */
var allTrueValues = function (values) {
    return values.every(Boolean);
};
/**
 * Return the icon representation of the boolean value
 *
 * @param value boolean
 * @returns string
 */
var mapBooleanToIcon = function (value) {
    return value ? "💰" : "✖";
};
export { allTrueValues, mapBooleanToIcon, randomBoolean };
