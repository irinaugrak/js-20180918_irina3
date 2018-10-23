'use strict';

let ivan = {
    "balance": "$1,825.65",
    "picture": "http://placehold.it/32x32",
    "age": 21,
    "name": "Golden Branch",
    "gender": "male",
    "greeting": "Hello, Golden Branch! You have 7 unread messages.",
    "favoriteFruit": "banana"
}

let petr = {
    "balance": "$1,725.65",
    "picture": "http://placehold.it/32x32",
    "age": 42,
    "name": "Petr Branch",
    "gender": "male",
    "greeting": "Hello, Golden Branch! You have 7 unread messages.",
    "favoriteFruit": "banana"
}

let maria = {
    "balance": "$1,925.65",
    "picture": "http://placehold.it/32x32",
    "age": 35,
    "name": "Maria Branch",
    "gender": "female",
    "greeting": "Hello, Golden Branch! You have 7 unread messages.",
    "favoriteFruit": "banana"
}

let elena = {
    "balance": "$1,625.65",
    "picture": "http://placehold.it/32x32",
    "age": 30,
    "name": "Elena Branch",
    "gender": "female",
    "greeting": "Hello, Golden Branch! You have 7 unread messages.",
    "favoriteFruit": "banana"
}

let mydata = [ivan, petr, maria, elena];

let str = showSalary(mydata, 40);
console.log(str);


/**
 * showSalary
 * @param {Array} data - данные о пользователях
 * @param {number} age - максимальный возраст
 * @returns {string}
 */
function showSalary(data, age) {
    let res = data.filter(function(user) {
        return user.age <= age;
    });
    let strPersons = '';
    for(let i=0; i<res.length; i++) {
        strPersons = strPersons + res[i].name + ', ' + res[i].balance;
        if(i !== res.length-1) {
            strPersons = strPersons + '\n';
        }
    }
    return strPersons;
}


