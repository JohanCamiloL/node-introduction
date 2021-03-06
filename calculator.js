/**
 * Sum two numbers.
 * @param {Number} a Number a.
 * @param {Number} b Number b.
 * @returns Numbers sum.
 */
const sum = (a, b) => a + b;

/**
 * Substract two numbers.
 * @param {Number} a Number a.
 * @param {Number} b Number b.
 * @returns Numbers substraction.
 */
const sub = (a, b) => a - b;

/**
 * Makes a multiplication within 2 numbers.
 * @param {Number} a First number.
 * @param {Number} b Second number.
 * @returns a times b.
 */
const mult = (a, b) => a * b;

/**
 * Division within 2 numbers.
 * @param {Number} a First number.
 * @param {Number} b Second number.
 * @returns Numbers division.
 */
const division = (a, b) => {
    if (b === 0) {
        return 0;
    }

    return a / b;
};

module.exports = { sum, sub, mult, division };