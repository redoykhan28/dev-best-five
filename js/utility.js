//adding function for select players
function selectPlayers(elem1) {

    let player = document.getElementById(elem1);
    playerText = player.innerText;

    let parentList = document.getElementById('list');

    let createChildList = document.createElement('li');
    createChildList.innerText = playerText;
    createChildList.style.padding = '10px';

    let childNum = parentList.appendChild(createChildList);

}

//error handle

