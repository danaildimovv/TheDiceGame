let dice1 = Math.round(Math.random() * 6);
let dice2 = Math.round(Math.random() * 6);

if (dice1 === 0){
    dice1 = 1;
}
let dicePicture1 = "./images/dice" + dice1.toString() + ".png";
document.querySelectorAll("img")[0].setAttribute("src", dicePicture1);
       
if (dice2 === 0){
    dice2 = 1;
}
let dicePicture2 = "./images/dice" + dice2.toString() + ".png";
document.querySelectorAll("img")[1].setAttribute("src", dicePicture2);


if (dice1 === dice2) {
    document.querySelector("h1").innerHTML = "Draw";
}
else if (dice1 >= dice2) {
    document.querySelector("h1").innerHTML = "Player 1 Wins";
}
else {
    document.querySelector("h1").innerHTML = "Player 2 Wins";
}

const refreshButton = document.querySelector('.refresh-button');
const refreshPage = () => {
  location.reload();
}
refreshButton.addEventListener('click', refreshPage);