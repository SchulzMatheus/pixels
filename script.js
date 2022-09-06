function randomizeColor(){
    const hexadeximal = '0123456789ABCDEF'
    let randomColor = '#'
    for(let i = 0; i < 6; i++) {
        randomColor += hexadeximal[Math.floor(Math.random() * 16)]
    }
    return randomColor;
}
