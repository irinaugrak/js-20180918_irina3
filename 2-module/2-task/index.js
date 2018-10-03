(function() {
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
    
    let res = find(myObj, 'blue');
    console.log(res);
    
    /**
     * Поиск свойства в объекте
     * @param {Object} obj - объект в котором ищем
     * @param {*} value - значение, которое ищем
     * @returns {Object}
     */
    function find (myObj, value) {
        pathArray = [];
        path = '';
        obhod(myObj, value, path);

        return (pathArray.length === 0) ? null : pathArray;
    }
    
    function obhod(obj, value, path) {
        for(let key in obj) {
            let delimiter = (path === '') ? '' : '.';
            let temp = path + delimiter + key;

            if(typeof obj[key] === 'object' && typeof obj[key] !== null) {
                obhod(obj[key], value, temp);
            } else {
                if(obj[key] === value) {
                    pathArray.push(temp);
                }
            }
        }
    }
}())

