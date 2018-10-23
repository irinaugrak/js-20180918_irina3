'use strict';

let path;
let pathArray;
let myObj = {
    options: {
        color: 'red'
    },
    style: {
        border: {
            color: 'blue'
        },
        background: {
            color: 'blue',
        }
    }
}

let resFind = find(myObj, 'red');
console.log(resFind);

/**
 * Поиск свойства в объекте
 * @param {Object} obj - объект в котором ищем
 * @param {*} value - значение, которое ищем
 * @returns {Object}
 */
function find (myObj, value) {
    pathArray = [];
    path = '';
    obhodObj(myObj, value, path);

    switch(pathArray.length) {
        case 0: 
            return null;
            break;
        case 1: 
            return pathArray[0];
            break;
        default:
            return pathArray;
    }
}

function obhodObj(obj, value, path) {
    for(let key in obj) {
        let delimiter = (path === '') ? '' : '.';
        let temp = path + delimiter + key;

        if(typeof obj[key] === 'object' && typeof obj[key] !== null) {
            obhodObj(obj[key], value, temp);
        } else {
            if(obj[key] === value) {
                pathArray.push(temp);
            }
        }
    }
}


