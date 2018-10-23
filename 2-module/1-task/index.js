'use strict';

let user = {
    firstName: 'ivan',
    lastName: 'ivanov',
    age: 30,
    options: {
        growth: '180',
        hair: {
            color: 'brown',
            length: 'short'
        },
        languages: ['russian','english']
        },
    profession: 'programmist'
};

let res = clone(user);


/**
 * Клонируем объект
 * @param {Object} obj - клонируем объект
 * @returns {Object}
*/
function clone(obj) {
    let cloneobj = {};
    obhod(obj, cloneobj);
    return  cloneobj;
}

function obhod(obj, cloneobj) {
    for(let key in obj) {
        if(typeof obj[key] === 'object' && obj[key] !== null && obj[key] !== cloneobj) {
            cloneobj[key] = {};
            obhod(obj[key], cloneobj[key]);
        } else {
            cloneobj[key] = obj[key];
        }
    }
}


