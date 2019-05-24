import { sample, values } from "lodash";

const GREETINGS = {
    en: "Good Morning!",
    de: "Guten Morgen!",
    fr: "Bonjour!",
    pl: "Dzień Dobry!",
    cz: "Dobrý den!"
};

// greet by the language code
export function greet(code) {
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
// _.values returns values of objects in array
// _.sample returns any random item in array
export function greetRandom() {
    return sample(values(GREETINGS));
}