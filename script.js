const randomColorBtn = document.getElementById('button-random-color')
const palleteElements = document.getElementsByClassName('pallete')
const allPalletElements = document.getElementsByClassName('color')
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

function newPaleteColor(array){
    const atualColor = ['']
    for(let i = 0; i<palleteElements.length; i++){
        const arrayOfColor = array[i]
        palleteElements[i].style.backgroundColor =  arrayOfColor
        atualColor.push(arrayOfColor)
    }
    localStorage.setItem('colorPalette', JSON.stringify(atualColor))
}

function aux (){
    return newPaleteColor(generateNewColors())
}

randomColorBtn.addEventListener('click', aux)
