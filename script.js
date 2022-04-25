console.log('Olá, mundo!');

// create random guess
const rgb = document.getElementById('rgb');
rgb.innerText = `(${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)})`;

// create colors
const colors = document.getElementById('colors');
for (let index = 0; index < 6; index += 1) {
  const colorDiv = document.createElement('div');
  colorDiv.className = 'ball';
  colors.appendChild(colorDiv);
  const rgbColor = `rgb(${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)})`;
  colorDiv.style.backgroundColor = rgbColor;
}
const colorOption = document.getElementsByClassName('ball')[Math.floor(Math.random() * 6)];
colorOption.style.backgroundColor = `rgb${rgb.innerText}`;

// choose a color
const answer = document.getElementById('answer');
let selectColor = '';
function gameText() {
  if (selectColor === '') {
    answer.innerText = 'Escolha uma cor';
  } else if (selectColor === colorOption.style.backgroundColor) {
    answer.innerText = 'Acertou!';
  } else {
    answer.innerText = 'Errou! Tente novamente!';
  }
}
gameText();

const ball = document.getElementsByClassName('ball');
function select(event) {
  selectColor = event.target.style.backgroundColor;
  gameText();
}
for (let index = 0; index < ball.length; index += 1) {
  ball[index].addEventListener('click', select);
}
