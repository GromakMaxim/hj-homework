let load = document.getElementById("loader");
let currenciesList = document.getElementById("items");

let request = new XMLHttpRequest();
request.open("get", "https://netology-slow-rest.herokuapp.com");
request.send();
request.onreadystatechange = function () {
    if (request.readyState === 4) {
        load.classList.toggle("loader_active");
        let response = request.responseText;
        process(response);

    }
}

function process(rawResponse) {
    let jsonObj = JSON.parse(rawResponse);
    let currencies = jsonObj.response.Valute;
    for (let item in currencies) {

        let code = currencies[item]["CharCode"];
        let val = currencies[item]["Value"];
        createCurrencyElement(code, val)
    }
}

function createCurrencyElement(code, value) {
    let currencyCode = document.createElement("div");
    currencyCode.className = "item__code";
    currencyCode.textContent = code;

    let currencyValue = document.createElement("div");
    currencyValue.className = "item__value";
    currencyValue.textContent = round(value);

    let currencySign = document.createElement("div");
    currencySign.className = "item__currency";
    currencySign.textContent = "rub.";

    let currencyWrapper = document.createElement("div");
    currencyWrapper.className = "item";

    currencyWrapper.appendChild(currencyCode);
    currencyWrapper.appendChild(currencyValue);
    currencyWrapper.appendChild(currencySign);

    currenciesList.insertAdjacentElement("afterbegin", currencyWrapper);
}

function round(value) {
    return Math.round(parseFloat(value) * 100) / 100;
}


