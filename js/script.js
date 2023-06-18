let colors = [];
let numInicial = 6;
let numberOfSquares = 6;

function generateRandomColors(num) {
  for (let i = 0; i < num; i++) {
    let arr = randomColor();
    colors.push(arr);
  }
}
generateRandomColors(numInicial);

let pickedColor = colors[pickColor()];

let cuadrado = document.querySelectorAll('.square');
let h1 = document.querySelector('h1');
let rgb = document.querySelector('#colorDisplay');
let mensaje = document.querySelector('#message');
rgb.textContent = pickedColor.toUpperCase();

for (let i = 0; i < cuadrado.length; i++) {
  cuadrado[i].style.backgroundColor = colors[i];
  cuadrado[i].addEventListener('click', function () {
    let clickedColor = this.style.backgroundColor;
    if (pickedColor === clickedColor) {
      h1.style.backgroundColor = pickedColor;
      changeColors(pickedColor);
      mensaje.textContent = '¡Correcto!';
      botonReset.textContent = 'Play Again?';
    } else {
      cuadrado[i].style.backgroundColor = cuadrosBg();
      mensaje.textContent = 'Intentalo nuevamente';
    }
  });
}

function cuadrosBg() {
  let colorBg = '#4a4a4a';
  return colorBg;
}

function changeColors(color) {
  for (let i = 0; i < cuadrado.length; i++) {
    cuadrado[i].style.backgroundColor = color;
  }
}

function pickColor() {
  let colorRandom = Math.floor(Math.random() * numberOfSquares);
  return colorRandom;
}

function randomColor() {
  let r = Math.floor(Math.random() * 256);
  let g = Math.floor(Math.random() * 256);
  let b = Math.floor(Math.random() * 256);
  let colorRgb = `rgb(${r}, ${g}, ${b})`;
  return colorRgb;
}
numInicial = 0;
let easyButton = document.querySelector('#easyButton');
let hardButton = document.querySelector('#hardButton');
generateRandomColors(numInicial);

let botonReset = document.querySelector('#reset');
botonReset.addEventListener('click', function () {
  reset();
});

function reset() {
  colors = [];
  pickColor();
  generateRandomColors(numberOfSquares);
  pickedColor = colors[pickColor()];

  for (let i = 0; i < cuadrado.length; i++) {
    if (colors[i]) {
      cuadrado[i].style.backgroundColor = colors[i];
      cuadrado[i].style.display = 'block';
    } else {
      cuadrado[i].style.display = 'none';
    }
    cuadrado[i].addEventListener('click', function () {
      let clickedColor = this.style.backgroundColor;
      if (pickedColor === clickedColor) {
        h1.style.backgroundColor = pickedColor;
        changeColors(pickedColor);
        mensaje.textContent = '¡Correcto!';
        botonReset.textContent = 'Play Again?';
      } else {
        cuadrado[i].style.backgroundColor = cuadrosBg();
        mensaje.textContent = 'Intentalo nuevamente';
      }
    });
  }

  rgb.textContent = pickedColor.toUpperCase();

  h1.style.backgroundColor = 'black';
  mensaje.textContent = '';

  botonReset.textContent = 'Nuevos Colores';
}

easyButton.addEventListener('click', function () {
  easyButton.classList.add('selected');
  hardButton.classList.remove('selected');
  numInicial = 3;
  numberOfSquares = 3;
  reset();
});

hardButton.addEventListener('click', function () {
  hardButton.classList.add('selected');
  easyButton.classList.remove('selected');
  numInicial = 6;
  numberOfSquares = 6;
  reset();
});
