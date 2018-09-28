'use strict';

exports.isStar = true;


// This function sum numbers
exports.sum = (...numbers) => numbers
    .map(Number)
    .reduce((a, b) => a + b, 0);
