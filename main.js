// ref to input bill amount
const inputBill = document.querySelector('#inputBill');
// ref to input cash 
const inputCash = document.querySelector('#inputCash');
// ref to give change button
const giveChangeButton = document.querySelector('#button');

// init array of available notes
const availableNotes = [2000, 500, 100, 20, 10, 5, 1];

// wiring button click 
giveChangeButton.addEventListener("click", calculateChange);

// FUNCTIONS

// function to calculate change
function calculateChange() {
    const inputBillAmount = inputBill.value;
    const inputCashAmount = inputCash.value;    
    let change = inputCashAmount - inputBillAmount;

    availableNotes.map(note => {
        if(note <= change) {
            var numOfNotes = parseInt(change/note);
            change = change - (note*numOfNotes);
            console.log("remaining", change)
            console.log(note + " x " + numOfNotes);
        }
    })

    // console.log(inputBillAmount, inputCashAmount, change);
}