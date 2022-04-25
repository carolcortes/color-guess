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

// select answer
const colorOption = document.getElementsByClassName('ball')[Math.floor(Math.random() * 6)];
colorOption.style.backgroundColor = `rgb${rgb.innerText}`;
colorOption.id = 'answer';
