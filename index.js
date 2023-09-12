
function randomDeice(){
    // img1
    var randomNumber = Math.floor((Math.random() * 6) + 1); // 1-6
    var randomImg = 'images/dice' + randomNumber + '.png'; // dice1-dice6
    document.querySelectorAll('img')[0].setAttribute('src', randomImg);

    // img2
    var randomNumber2 = Math.floor((Math.random() * 6) + 1); // 1-6
    var randomImg2 = 'images/dice' + randomNumber2 + '.png'; // dice1-dice6
    document.querySelectorAll('img')[1].setAttribute('src', randomImg2);

    // Compare the dice rolls
    if (randomNumber > randomNumber2) {
        document.querySelector('h1').innerHTML = "🚩player 1 won";
    } else if (randomNumber < randomNumber2) {
        document.querySelector('h1').innerHTML = "🚩player 2 won";
    } else {
        document.querySelector('h1').innerHTML = "🚩draw";
    }
}

randomDeice();
