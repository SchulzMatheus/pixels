const randomColorBtn = document.getElementById('button-random-color')
const palleteElements = document.getElementsByClassName('pallete')
const allPalletElements = document.getElementsByClassName('color')
const pixelBoard = document.querySelector('#pixel-board')
//document.body.style.backgroundColor
//gera uma cor random
function randomizeColor(){
    const hexadeximal = '0123456789ABCDEF'
    let randomColor = '#'
    for(let i = 0; i < 6; i++) {
        randomColor += hexadeximal[Math.floor(Math.random() * 16)]
    }
    return randomColor;
}
//gera um grupo de 3 cores
function generateNewColors(){
     const newColors = []
     for(let i = 0; i < 3; i++){
        newColors[i] = randomizeColor()
     }
     return newColors
}

function newPaleteColor(array){
    const atualColor = []
    for(let i = 0; i<array.length; i++){
        const arrayOfColor = array[i]
        palleteElements[i].style.backgroundColor =  arrayOfColor
        atualColor.push(arrayOfColor)
    }
    localStorage.setItem('colorPalette', JSON.stringify(atualColor))
}

function generatePixels() {
    for(let i = 0; i < 25; i++) {
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

function load ()
{
    generatePixels(); 
    rememberColor();
}

load()
function aux (){
    return newPaleteColor(generateNewColors())
}

randomColorBtn.addEventListener('click', aux)
