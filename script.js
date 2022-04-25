console.log('Olá, mundo!');

// create random guess
function randomColor() {
  return Math.floor(Math.random() * 255);
}
const rgb = document.getElementById('rgb');
function randomRGB() {
  rgb.innerText = `(${randomColor()}, ${randomColor()}, ${randomColor()})`;
}

// create colors
const colors = document.getElementById('colors');
function newColors() {
  for (let index = 0; index < 6; index += 1) {
    const colorDiv = document.createElement('div');
    colorDiv.className = 'ball';
    colors.appendChild(colorDiv);
    const rgbColor = `rgb(${randomColor()}, ${randomColor()}, ${randomColor()})`;
    colorDiv.style.backgroundColor = rgbColor;
  }
}
function rightColor() {
  const colorOption = document.getElementsByClassName('ball')[Math.floor(Math.random() * 6)];
  colorOption.style.backgroundColor = `rgb${rgb.innerText}`;
}

// choose a color and scoring
const answer = document.getElementById('answer');
let selectColor = '';
let points = 0;
function gameText() {
  const score = document.getElementById('score');
  if (selectColor === '') {
    answer.innerText = 'Escolha uma cor';
  } else if (selectColor === `rgb${rgb.innerText}`) {
    answer.innerText = 'Acertou!';
    points += 3;
    score.innerText = points;
  } else {
    answer.innerText = 'Errou! Tente novamente!';
  }
}

const ball = document.getElementsByClassName('ball');
function select(event) {
  selectColor = event.target.style.backgroundColor;
  gameText();
}
function listeningBall() {
  for (let index = 0; index < ball.length; index += 1) {
    ball[index].addEventListener('click', select);
  }
}

// new colors
const resetButton = document.getElementById('reset-game');
function resetGame() {
  randomRGB();
  colors.textContent = '';
  newColors();
  rightColor();
  listeningBall();
  selectColor = '';
  gameText();
}
resetButton.addEventListener('click', resetGame);

window.onload = () => {
  randomRGB();
  newColors();
  rightColor();
  gameText();
  listeningBall();
};
