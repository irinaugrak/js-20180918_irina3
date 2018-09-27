'use strict';
var inputData = '1, -5.8 или 10, хотя 34 + -5.3 и 73 1.555';
//var inputData = 'k12j6';
getMinMax(inputData); // ожидается [-5.8, 73]

/**
 * Найти min/max в произвольной строке
 * @param   {string} str -  входные данные
 * @returns {{min:number, max:number}}  объект
 */
function getMinMax(str) {
    let res = Array();
    let arr = getDigitArray(str);
    
    res.push(Math.min.apply(null, arr));
    res.push(Math.max.apply(null, arr));
    
    console.log(res);

    return res;
 }

 /**
 * Функция получает массив чисел из строки
 * @param   {string} str -  входные данные
 * @returns {}  объект
 */
function getDigitArray(str) {
    let i = 0;
    let strTemp = str;
    let digit;
    let digitstr;
    let arr = Array();
   
    while(i<str.length) {
        strTemp = str.slice(i);
        digit = parseFloat(strTemp);

        if(isNaN(digit)) {
            i++;
            continue;
        } 

        arr.push(digit);
        digitstr = "" + digit;
        i = i + digitstr.length + 1;
        
    }

    return arr;
}

