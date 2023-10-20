const adviceId = document.getElementById("advice-id");
const adviceText = document.getElementById("advice-text");
const generateButton = document.getElementById("btn-generate");


window.addEventListener("load", getAdvice);
generateButton.addEventListener("click", getAdvice);

async function getAdvice(){

    adviceId.innerText = " - ";
    adviceText.innerText = '“ Loading... ”';

    const response = await fetch("https://api.adviceslip.com/advice");
    const data = await response.json();

    adviceId.innerText = data.slip.id;
    adviceText.innerText = '“ ' + data.slip.advice + ' ”';

}   