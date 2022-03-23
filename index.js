const firstDice = document.querySelector('.img1');
const secondDice = document.querySelector('.img2');
const h1 = document.querySelector('h1');


const randomNumber1 = Math.floor(Math.random() * 6 + 1);
firstDice.setAttribute("src", `./images/dice${randomNumber1}.png`);

const randomNumber2 = Math.floor(Math.random() * 6 + 1);
secondDice.setAttribute("src", `./images/dice${randomNumber2}.png`);

if(randomNumber1 > randomNumber2) {
    h1.innerText = "✨Player 1 wins!"
} else if( randomNumber1 < randomNumber2) {
    h1.innerText = "Player 2 wins!✨"
} else {
    h1.innerText = "Draw!"
}