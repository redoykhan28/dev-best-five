//adding function for select players
function selectPlayers(elem1) {

    //selecting the player
    let player = document.getElementById(elem1);
    playerText = player.innerText;

    //select the parent elemet
    let parentList = document.getElementById('list');

    //create a child element
    let createChildList = document.createElement('li');
    createChildList.innerText = playerText;
    createChildList.style.padding = '10px';

    // append the child element into parent 
    let childNum = parentList.appendChild(createChildList);

}

//adding function for calculate selected 5 expenses
function calculatePlayerExpenses(elem1, elem2) {

    //per player rate define
    let perPlayerrate = document.getElementById(elem1);
    let perPlayerrateValue = parseFloat(perPlayerrate.value);

    //calculate total expenses of 5 players
    let playerExpenses = perPlayerrateValue * 5

    //set the result to player expenses
    let totalExpanses = document.getElementById(elem2);
    totalExpanses.innerText = playerExpenses;

    return playerExpenses;

}

//adding function for calculate manager and coach

function calculateManagement(elem1, elem2) {

    //for manager
    let manager = document.getElementById(elem1);
    let managerValue = parseFloat(manager.value);
    console.log(managerValue);
    //for coach
    let coach = document.getElementById(elem2);
    let coachValue = parseFloat(coach.value);
    console.log(coachValue);


    let totalManagement = managerValue + coachValue;
    return totalManagement;
}

//error handle

