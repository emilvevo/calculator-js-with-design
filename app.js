const operationButtons = document.getElementsByClassName("operation");
const numberButtons = document.getElementsByClassName("number");

// Functions

function getPreviousResult() {
    return document.getElementById("previous-result").innerText;
};

function printPreviousResult(number) {
    if (number == "") {
        document.getElementById("previous-result").innerText = number;
    } else {
        document.getElementById("previous-result").innerText = getFormattedNumber(number);
    }
};

function getCurrentResult() {
    return document.getElementById("current-result").innerText;
};

function printCurrentResult(number) {
    if (number == "") {
        document.getElementById("current-result").innerText = number;
    } else {
        document.getElementById("current-result").innerText = getFormattedNumber(number);
    }
};

function getFormattedNumber(number) {
    if (number == "-") {
        return "";
    }
    var n = number;
    var value = n.toLocaleString("en");
    return value;
};

function reverseNumberFormat(number) {
    return number.replace(/,/g, "");
};


function restriction() {
    if (getCurrentResult().length >= 17 || getPreviousResult().length >= 17) {
        printCurrentResult("");
        printPreviousResult("");
        alert("Too many numbers");
    };
};



for (var op = 0; op < operationButtons.length; op++) {
    operationButtons[op].addEventListener('click', function() {
        if (this.id == "all-clear") {
            printCurrentResult("");
            printPreviousResult("");
        } else if (this.id == "clear") {
            var resultC = reverseNumberFormat(getCurrentResult()).toString();
            if (resultC) {
                resultC = resultC.substr(0, resultC.length - 1);
                printCurrentResult(resultC);
            }
        } else {
            var resultC = getCurrentResult();
            var resultP = getPreviousResult();
            if (resultC != "") {
                resultC = reverseNumberFormat(resultC);
                resultP = resultP + resultC;
                if (this.id == "=") {
                    var result = eval(resultP);
                    printCurrentResult(result);
                    printPreviousResult("");
                } else if (this.id == "%") {


                } else {
                    resultP = resultP + this.id;
                    printPreviousResult(resultP);
                    printCurrentResult("");

                }

            };
        };
    });
};

for (var num = 0; num < numberButtons.length; num++) {

    numberButtons[num].addEventListener('click', function() {
        var resultC = reverseNumberFormat(getCurrentResult());

        if (resultC != NaN) {
            resultC = resultC + this.id;
            printCurrentResult(resultC);


        };
        restriction();
    });
};