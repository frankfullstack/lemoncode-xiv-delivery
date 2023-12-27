/**
 * Get a boolean random value
 * 
 * @param factor number
 * @returns boolean
 */
const randomBoolean = (factor: number): boolean => {
    return Math.random() < factor;
}

/**
 * Returns true if all the tuple values are true
 * 
 * @param values [boolean, boolean, boolean]
 * @returns boolean
 */
const allTrueValues = (values: [boolean, boolean, boolean]): boolean => {
    return values.every(Boolean);
}

/**
 * Return the icon representation of the boolean value
 * 
 * @param value boolean
 * @returns string
 */
const mapBooleanToIcon = (value: boolean): string => {
    return value ? "💰" : "✖";
}

export { allTrueValues,mapBooleanToIcon, randomBoolean};