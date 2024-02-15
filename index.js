const displayEl = document.getElementById('display');
let displayText = "0";

function appendToDisplay(input) {
    if(displayText == "0"){
        displayText = input;
    }else{
        displayText += input;
    }
    displayEl.value = displayText;
}

function clearDisplay() {
    displayText = "0";
    displayEl.value = displayText;
}

function calculate() {
    try {
        let result = eval(displayText);
        displayText = result;
        displayEl.value = result;
    }
    catch(error){
        displayText = "";
        displayEl.value = "Math Error.";
    }
}