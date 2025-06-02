let first = document.getElementById("child");
let second = document.getElementById("childfirst");
let third = document.getElementById("childsecond");

let tipAmountEl = document.getElementById("tipamount");
let totalBillEl = document.getElementById("totalbill");
let perPersonEl = document.getElementById("billno.");

let select = 0;


document.getElementById("first").addEventListener("click", () => {
    select = 5;
    second.value = "";
    calculate();
});
document.getElementById("second").addEventListener("click", () => {
    select = 10;
    second.value = "";
    calculate();
});
document.getElementById("third").addEventListener("click", () => {
    select = 15;
    second.value = "";
    calculate();
});
document.getElementById("fourth").addEventListener("click", () => {
    select = 20;
    second.value = "";
    calculate();
});



second.addEventListener("input", calculate);
third.addEventListener("input", calculate);


function calculate() {

    let bill = parseFloat(first.value);
    let customTip = parseFloat(second.value);
    let people = parseInt(third.value) || 1;



    if (isNaN(bill) || bill <= 0) return;
    let tipPercent = (!isNaN(customTip) && customTip > 0) ? customTip : select;
    let tip = bill * (tipPercent / 100);
    let total = bill + tip;
    let perPerson = total / people;


    tipAmountEl.textContent = tip.toFixed(2);
    totalBillEl.textContent = total.toFixed(2);
    perPersonEl.textContent = perPerson.toFixed(2);
}





