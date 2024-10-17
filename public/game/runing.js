const MAX_HEIGTH = 700;
const MAX_WIDTH = 1400;
const TANK_HEIGHT = 35;
const TANK_WIDTH = 50;
const TANK_SPEED = 2;
const BULLET_SPEED = 5;

function randPositionTank() {
    return {
        x: Math.floor(Math.random() * (MAX_WIDTH - TANK_WIDTH)),
        y: Math.floor(Math.random() * (MAX_HEIGTH - TANK_HEIGHT))
    };
}

function startTank(id) {
    const tank = document.querySelector(`#tank-${id}`);
    const position = randPositionTank();
    tank.style.left = position.x + 'px';
    tank.style.bottom = position.y + 'px';
}