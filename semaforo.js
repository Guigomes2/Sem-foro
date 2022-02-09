const img = document.getElementById('img');
const  buttons = document.getElementsById(' buttons');

const trafficLight = (event) => {
    turnOn[event.target.id]();
}

const turnOn = {
    'red':          () => img.src = 'imagens/vermelho.png',
    'yellow':       () => img.src = 'imagens/amarelo.png',
    'green':        () => img.src = 'imagens/verde.png',
    'automatic':    () => img.src = setInterval(changeColor, 1000)

}

 buttons.addEventListener('click', trafficLight);