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

    let parent = document.getElementById('list');

    let childSelected = parseFloat(parent.childNodes.length - 1);

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

    //total management
    let totalManagement = managerValue + coachValue;
    return totalManagement;

}


//error handle for not select more than 5 players and showing the selected player numbers
function selectedPlayerHandle() {

    let parent = document.getElementById('list');

    let childLength = parent.childNodes.length;


    if (childLength > 5) {


        alert("you can't add more than 5 players");
        return true;

    }

    //showing the player number that we selected
    let number = document.getElementById('select-number')
    number.innerText = '-' + childLength;

}

//per player fielf error handling
function playerErrorHandling() {

    let player = document.getElementById('perPlayerField')
    let playerValue = player.value;

    if (isNaN(playerValue) || playerValue === '') {

        alert('Error! Please insert a number');

        return true;
    }
}

//calculation error handeling for input field(coach&manager)
function managementErrorHandling() {
    //selecting manager and coach
    let manager = document.getElementById('manager-field');
    let managerValue = manager.value;
    let coach = document.getElementById('coach-field');
    let coachValue = coach.value;


    //if not a number or empty
    if (isNaN(managerValue) || isNaN(coachValue) || managerValue === '' || coachValue === '') {

        alert('Error! Please insert a number');
        return true;
    }
}


