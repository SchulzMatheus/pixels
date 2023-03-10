const randomColorBtn = document.getElementById('button-random-color');
const palleteElements = document.getElementsByClassName('pallete');
document.querySelector('.preto').style.backgroundColor = 'black';
const pixelBoard = document.querySelector('#pixel-board');
let selected = document.querySelector('.selected');
let color = 'black';
const markBox = document.getElementById('color-palette');
const pixelTT = document.getElementsByClassName('pixel');
console.log(pixelTT);
const clearButton = document.getElementById('clear-board');

function randomizeColor(){
    const hexadeximal = '0123456789ABCDEF';
    let randomColor = '#';
    for(let i = 0; i < 6; i += 1) {
        randomColor += hexadeximal [Math.floor(Math.random() * 16)];
    }
    return randomColor;
}

function generateNewColors(){
     const newColors = [];
     for(let i = 0; i < 3; i += 1) {
    newColors[i] = randomizeColor();
     }
     return newColors;
}

function newPaleteColor(array){
    const atualColor = []
    for(let i = 0; i<array.length; i += 1){
        const arrayOfColor = array[i]
        palleteElements[i].style.backgroundColor =  arrayOfColor
        atualColor.push(arrayOfColor)
    }
    localStorage.setItem('colorPalette', JSON.stringify(atualColor))
}

function generatePixels() {
    for(let i = 0; i < 25; i += 1) {
        const newPixel = document.createElement('div')
        newPixel.className = 'pixel'
        newPixel.style.backgroundColor = 'white'
        pixelBoard.appendChild(newPixel)
    }
}

function rememberColor(){
    const storagePalette = JSON.parse(localStorage.getItem('colorPalette'));
    if(storagePalette !== null){
        return newPaleteColor(storagePalette);
    }
    return newPaleteColor(generateNewColors())
}

function aux (){
    return newPaleteColor(generateNewColors())
}

function removeClassSelect(classList){
let newClass = '';
for(let i = 0; i < classList.length; i += 1){
    if(classList[i] !== 'selected') {
        newClass += classList[i] + ' ';
    }
}
return newClass
}

function selectColor (event) {
    elementEvent = event.target
    if(elementEvent.className.includes('color')) {
        const selectedBox = selected.classList;
        selected.className = removeClassSelect(selectedBox)
        elementEvent.className += ' selected';
        selected = elementEvent
        color = elementEvent.style.backgroundColor;
    }
}

function changePixelColor(event){
    const pixelToBePaint = event.target;
    if(pixelToBePaint.className.includes('pixel'))
    pixelToBePaint.style.backgroundColor = color
}

function clearPixel () {
    for(let i = 0; i<pixelTT.length; i += 1)
    pixelTT[i].style.backgroundColor = 'white'
}

function clickEvents(){
    randomColorBtn.addEventListener('click', aux)
    markBox.addEventListener('click', selectColor)
    pixelBoard.addEventListener('click', changePixelColor)
    clearButton.addEventListener('click', clearPixel)
}


function load ()
{
    generatePixels(); 
    rememberColor();
    clickEvents();
}

load()




