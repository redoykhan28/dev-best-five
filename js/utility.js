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

    //check that select player is more than 5 or not
    let listLenght = selectedPlayerHandle();
    if (listLenght) {

        return;
    }

    //append
    parentList.appendChild(createChildList);

}

//adding function for calculate selected player expenses
function calculatePlayerExpenses(elem1, elem2) {

    //per player rate define
    let perPlayerrate = document.getElementById(elem1);
    let perPlayerrateValue = parseFloat(perPlayerrate.value);

    //calculate total expenses of selected players

    let ol = document.getElementById('list');

    let childSelected = parseFloat(ol.childNodes.length - 1);

    let playerExpenses = perPlayerrateValue * childSelected;

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


//error handle for not select more than 5 players
function selectedPlayerHandle() {

    let ol = document.getElementById('list');

    let childLength = ol.childNodes.length;

    if (childLength > 5) {

        alert("you can't add more than 5 players");
        return true;

    }

}

