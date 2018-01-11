'use strict';
module.exports = function() {

    let randomNum = Math.random() * 1000000;
    return function() {
        return randomNum;
    };
  
};