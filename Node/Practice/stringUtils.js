"use strict";

const capitalize = (x) => {
    return x.toUpperCase();
}

const reverse = (x) => {
    return [...x].reverse().join('');
}

module.exports = {
    capitalize,
    reverse
}