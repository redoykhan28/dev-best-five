//calculate the 5-selected players
document.getElementById('calculate').addEventListener('click', function () {

    let perPlayerrate = document.getElementById('perPlayerField');
    let perPlayerrateValue = parseFloat(perPlayerrate.value);

    let playerExpenses = perPlayerrateValue * 5

    let totalExpanses = document.getElementById('expanses');
    totalExpanses.innerText = playerExpenses

})