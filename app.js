const sum = (a,b) => {
    return a + b
}

let oneEuroIs = {
    "JPY": 156.5, // yenes
    "USD": 1.07, // dollar
    "GBP": 0.87, // libra
}

const fromDollarToYen = (USD) => {
    return USD *oneEuroIs.JPY;
};

const fromEuroToDollar  = (EUR) => {
    return EUR *oneEuroIs.USD;
};

const fromYenToPound  = (JPY) => {
    return JPY *oneEuroIs.GBP;
};

module.exports = { sum, fromEuroToDollar, fromDollarToYen, fromYenToPound }
