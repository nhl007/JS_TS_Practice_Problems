"use strict";
const prices = [1, 2, 3, 4, 0, 9, 9, 2, 10, 2, 1, 0];
const shortAnalysis = (array) => {
    array.sort();
    const buyday = array[0];
    const sellday = array[array.length - 1];
    console.log(array.indexOf(buyday));
    return { buy: buyday, sell: sellday };
};
console.log(shortAnalysis(prices));
