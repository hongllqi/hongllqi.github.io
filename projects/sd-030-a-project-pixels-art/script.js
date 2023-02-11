// Quantidade de cores na paleta
const quantColorsPallete = 4;
// Array que armazena cada cor da paleta
let colorPallete = [];
colorPallete[0] = [0, 0, 0];
// Tamanho do quadro
let quantPixelBoard = 5;
// Matriz que armazena as cores de cada elemento do quadro
let colorPixelBoard = [];

// Função para salvar a paleta
function saveColorPallete() {
  localStorage.setItem('colorPalette', JSON.stringify(colorPallete));
}

// Função para sortear cores na paleta
function sortColorPallete() {
  colorPallete = [];
  colorPallete[0] = [0, 0, 0];
  for (let i = 1; i < quantColorsPallete; i += 1) {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    colorPallete[i] = [r, g, b];
  }
  saveColorPallete();
}

// Função para associar as cores do array aos elementos HTML
function associateColorPallete() {
  const colorElements = document.querySelectorAll('.color');
  for (let i = 0; i < quantColorsPallete; i += 1) {
    const color = colorElements[i];
    const rgbColor = colorPallete[i];
    color.style.backgroundColor = `rgb(${rgbColor[0]}, ${rgbColor[1]}, ${rgbColor[2]})`;
  }
}

// Função para recarregar a paleta
function loadColorPallete() {
  colorPallete = JSON.parse(localStorage.getItem('colorPalette'));
  if (colorPallete === null) {
    sortColorPallete();
  }
  associateColorPallete();
}

// Função para selecionar cor na paleta
const selectColorPallete = (event) => {
  const selectedOld = document.querySelector('.selected');
  selectedOld.classList.remove('selected');
  event.target.classList.add('selected');
};

// Iniciando paleta de cores
const colorPalleteElement = document.querySelector('#color-palette');
for (let i = 0; i < quantColorsPallete; i += 1) {
  // Elemento que contém a cor representante
  const color = document.createElement('div');
  color.className = 'color';
  if (i === 0) {
    color.classList.add('selected');
  }
  color.addEventListener('click', selectColorPallete);
  colorPalleteElement.appendChild(color);
}
loadColorPallete();

// Botão de cores aleatórias
const buttonRandomColor = document.querySelector('#button-random-color');
buttonRandomColor.onclick = () => {
  sortColorPallete();
  associateColorPallete();
};

// Função para salvar o quadro
function savePixelBoard() {
  colorPixelBoard = []; // Limpando Array
  const pixels = document.querySelectorAll('.pixel');
  for (const pixel of pixels) {
    colorPixelBoard.push(pixel.style.backgroundColor);
  }
  localStorage.setItem('pixelBoard', JSON.stringify(colorPixelBoard));
}

// Função para carregar o quadro salvo
function loadPixelBoard() {
  colorPixelBoard = JSON.parse(localStorage.getItem('pixelBoard'));
  if (colorPixelBoard != null) {
    const pixels = document.querySelectorAll('.pixel');
    for (let h = 0; h < quantPixelBoard; h += 1) { // Iterando linhas
      for (let w = 0; w < quantPixelBoard; w += 1) { // Iterando colunas
        const index = (h * (quantPixelBoard - 1)) + w + h;
        const pixel = pixels[index];
        const color = colorPixelBoard[index];
        pixel.style.backgroundColor = color;
      }
    }
  }
  colorPixelBoard = [];
}

// Função para preencher um pixel do quadro com a cor selecionada
const paintPixelBoard = (event) => {
  // Cor selecionada
  const selectedColor = document.querySelector('.selected');
  // Atribuindo a cor
  event.target.style.backgroundColor = selectedColor.style.backgroundColor;
  savePixelBoard();
};

// Função para salvar o tamanho do quadro
function saveSizePixelBoard() {
  localStorage.setItem('boardSize', quantPixelBoard);
}

// Função para recarregar o tamanho do quadro
function loadSizePixelBoard() {
  const load = parseInt(localStorage.getItem('boardSize'));
  if (load >= 5) {
    quantPixelBoard = load;
  }
}

// Função para desenhar o quadro na tela
function drawPixelBoard() {
  const pixelBoardElement = document.querySelector('#pixel-board');
  for (let h = 0; h < quantPixelBoard; h += 1) { // Iterando linhas
    for (let w = 0; w < quantPixelBoard; w += 1) { // Iterando colunas
      const pixel = document.createElement('div');
      pixel.className = 'pixel';
      pixel.style.backgroundColor = 'rgb(255,255,255)';
      pixel.addEventListener('click', paintPixelBoard);
      pixelBoardElement.appendChild(pixel);
    }
    const br = document.createElement('br');
    br.className = 'brpixel';
    pixelBoardElement.appendChild(br);
  }
  loadPixelBoard();
}

// Iniciando quadro
loadSizePixelBoard();
drawPixelBoard();

// Função para limpar o quadro
function clearPixelBoard() {
  const pixels = document.querySelectorAll('.pixel');
  for (const pixel of pixels) {
    pixel.style.backgroundColor = 'rgb(255,255,255)';
  }
}
const buttonCleanPixelBoard = document.querySelector('#clear-board');
buttonCleanPixelBoard.onclick = () => {
  clearPixelBoard();
};

// Botão para alterar o tamanho do quadro
const buttonResizeBoard = document.querySelector('#generate-board');
buttonResizeBoard.onclick = () => {
  const inputBoardSize = document.querySelector('#board-size');
  if (inputBoardSize.value > 5) {
    quantPixelBoard = inputBoardSize.value;
    if (quantPixelBoard > 50) {
      quantPixelBoard = 50;
    }
    colorPixelBoard = [];
    const pixels = document.querySelectorAll('.pixel');
    for (const pixel of pixels) {
      pixel.remove();
    }
    let brpixels = document.querySelectorAll('.brpixel');
    for (const brpixel of brpixels) {
      brpixel.remove();
    }
    drawPixelBoard();
    saveSizePixelBoard();
  } else {
    alert('Board inválido!');
  }
};
