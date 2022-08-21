//calculate the 5-selected players
document.getElementById('calculate').addEventListener('click', function () {

    //total expenses of 5 player
    let expenses = calculatePlayerExpenses('perPlayerField', 'expanses');



})

document.getElementById('calculateTotal').addEventListener('click', function () {

    //total expenses of 5 player
    let expenses = calculatePlayerExpenses('perPlayerField', 'expanses');

    //total expenses for coach and manager
    let totalManagement = calculateManagement('manager-field', 'coach-field');

    let total = expenses + totalManagement

    //set the total amount
    let totalAmount = document.getElementById('totalAmount');
    totalAmount.innerText = total;
})