'use strict';

let m = +prompt("Введите натуральное число m: ", "");
let n = +prompt("Введите натуральное число n: ", "");

let correct = true;

if (parseInt(m) !== m || m <= 0) {
    correct = false;
    alert("Некорректно введено число m!");
};

if (parseInt(n) !== n || n <= 0) {
    correct = false;
    alert("Некорректно введено число n!");
};

if(correct) {
    alert( pow(m, n) );
}

/**
 * Power
 * @param {number} m base
 * @param {number} n index
 * @returns {number}
 */
function pow (m, n) {
    return (n === 1) ? m : m*pow(m, n-1);
}