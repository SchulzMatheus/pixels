const randomColorBtn = document.getElementById('button-random-color')
const palleteElements = document.getElementsByClassName('pallete')
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
     for(let i = 0; i<3; i++){
        newColors[i] = randomizeColor()
     }
     return newColors
}
console.log(generateNewColors())

function newPaleteColor(){
    const arrayOfColor = generateNewColors()
    for(let i = 0; i<palleteElements.length; i++){
        palleteElements[i].style.backgroundColor =  arrayOfColor[i]
    }
}
randomColorBtn.addEventListener('click', newPaleteColor)
