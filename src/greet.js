const _ = require("lodash");

const GREETINGS = {
    en: "Good Morning!",
    de: "Guten Morgen!",
    fr: "Bonjour!",
    pl: "Dzień Dobry!",
    cz: "Dobrý den!"
};

// greet by the language code
exports.greet = function (code) {
    if (code) {
        // check if value associated with the language code exists
        if (!GREETINGS[code]) {
            return `Language '$code' not supported`;
        }
        else {
            return GREETINGS[code];
        }
    }
    else {
        // return greetings in english if code is empty
        return GREETINGS['en'];
    }
}

// greet a random greeting
exports.greetRandom = function () {
    // _.values returns values of objects in array
    // _.sample returns any random item in array
    return _.sample(_.values(GREETINGS));
}