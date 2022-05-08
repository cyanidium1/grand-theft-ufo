const hero = document.getElementById('hero')
const enemyTruck = document.getElementById('enemy1')
// animations
const hero__moving = document.getElementById('hero__moving')
const wheels__rollingf = document.getElementById('fwheeldrive') //cl enemy__wheelF
const wheels__rollingr = document.getElementById('rwheeldrive') //cl enemy__wheelR
const bg = document.getElementById('playground')
const bang = document.getElementById('bang')
const level = document.getElementById('level')
const playAgain = document.getElementById('playAgain')
//making it harder
let score = 0;
let speed = 6; // k = 1.5
enemyTruck.style.animation = `enemy1Move ${speed}s infinite linear` // second speed = 4
setTimeout(() => {
    speed = 4;
    level.style.width = '400px';
    enemyTruck.style.animation = `enemy1Move ${speed}s infinite linear`
    setTimeout(() => {
        level.style.width = '600px';
        speed = 2.67;
        enemyTruck.style.animation = `enemy1Move ${speed}s infinite linear`
        setTimeout(() => {
            level.style.width = '800px';
            speed = 1.78;
            enemyTruck.style.animation = `enemy1Move ${speed}s infinite linear`
        }, 11000);
    }, 11000);
}, 5000);

// stops animations when player loses etc

let a = 0;
function playerLost(){
    level.style.display = 'none';
    document.getElementById('score').style.display = 'none';
    hero__moving.classList.remove('hero__moving');
    wheels__rollingf.style.animation = 'none';
    wheels__rollingr.style.animation = 'none';
    playAgain.style.display = 'block'
    setTimeout(() => {
        hero.style.display = 'none';
        enemyTruck.style.display = 'none'; 
        if (a == 0) {
            bang.style.display = 'block';
            a+=1
        }
        setTimeout(() => {
            bang.style.display = 'none';
            bg.style.animation = 'none';
        }, 500);
    }, 0);
}
// jump fn
document.addEventListener('click', function(event) {
    if (speed == 6) {
        jump()
    }
    if (speed == 4) {
        jump1()
    }
    if (speed == 2.67) {
        jump2()
    }
    if (speed == 1.78) {
        jump3()
    }
})

function jump() {
    if (hero.classList != 'jump') {
        hero.classList.add('jump')
    }
    setTimeout(() => {
            hero.classList.remove('jump')
    }, 2250);
}
function jump1() {
    if (hero.classList != 'jump1') {
        hero.classList.add('jump1')
    }
    setTimeout(() => {
            hero.classList.remove('jump1')
    }, 1500);
}
function jump2() {
    if (hero.classList != 'jump2') {
        hero.classList.add('jump2')
    }
    setTimeout(() => {
            hero.classList.remove('jump2')
    }, 1000);
}
function jump3() {
    if (hero.classList != 'jump3') {
        hero.classList.add('jump3')
    }
    setTimeout(() => {
            hero.classList.remove('jump3')
    }, 670);
}
// is alive checker
let isAlive = setInterval ( function  () {
    let heroTop = parseInt(window.getComputedStyle(hero).getPropertyValue('bottom'))
    let enemy1Rigth = parseInt(window.getComputedStyle(enemy1).getPropertyValue('right'))
    if (heroTop <= 150 && enemy1Rigth >= 650 && enemy1Rigth <= 900) {
        playerLost()
        setTimeout(() => {
            alert(`Game Over! Score: ${score - 1}`)
        }, 800);
    }
    score += 1;
    document.getElementById('score').innerHTML = score;
}, 10)
