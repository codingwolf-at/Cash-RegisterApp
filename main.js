// ref to input bill amount
const inputBill = document.querySelector('#inputBill');
// ref to input cash 
const inputCash = document.querySelector('#inputCash');
// ref to give change button
const giveChangeButton = document.querySelector('#button');
// ref to output table
const outputTable = document.querySelector('#output');

// init array of available notes
const availableNotes = [2000, 500, 100, 20, 10, 5, 1];

// wiring button click 
giveChangeButton.addEventListener("click", calculateChange);

// FUNCTIONS

// function to calculate change
function calculateChange() {
    const inputBillAmount = inputBill.value;
    const inputCashAmount = inputCash.value;    
    const changeArray = [];
    let change = inputCashAmount - inputBillAmount;

    console.log(typeof inputBillAmount);

    if (inputBillAmount === "" || inputCashAmount === "" || Number(inputBillAmount) <= 0 || Number(inputCashAmount) <= 0) {
        alert("Both inputs needs to be a non zero positive number!")
    } else if (Number(inputBillAmount) > Number(inputCashAmount)) {
        alert("Cash given needs to be greater than or equal to the bill amount!")
    } else {
        availableNotes.map(note => {
            if(note <= change) {
                var numOfNotes = parseInt(change/note);
                changeArray.push(numOfNotes);
                change = change - (note*numOfNotes);
            } else {
                changeArray.push(0);
            }
        });
        // show table
        renderList(availableNotes, changeArray);
    }
}

// function to render list
function renderList(availableNotes, changeArray) {
    // getting the data in tabular form via looping
    const cashRegisterHTML = [];  
    for (let i = 0; i<7; i++) {
        cashRegisterHTML.push(createListItem(availableNotes[i], changeArray[i]));
    }
    const joinedCashRegisterHTML = cashRegisterHTML.join("")
    // setting the html of table
    outputTable.innerHTML = joinedCashRegisterHTML; 
}

// function to create HTML for list 
function createListItem(availableNotes, changeArray) {
    return `
    <tr>
    <th scope="row">${availableNotes}</th>
    <td>x</td>
    <td>${changeArray}</td>
    </tr>
    `;
}