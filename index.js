function randomInteger(min, max) {
    let rand = min - 0.5 + Math.random() * (max - min + 1);
    return Math.round(rand);
  }

let ora = 0;
let oraPlus = 1;
let oraVid = `Ора`;
let stand = `Star Platinum`;

var oraAudio1 = new Audio('ora.wav');
var oraAudio21 = new Audio('muda.mp3');
var oraAudio22 = new Audio('zawarudo.mp3');
var oraAudio23 = new Audio('time2.mp3');
var oraAudio31 = new Audio('yesiam.wav');
var oraAudio32 = new Audio('anime.mp3');
var oraAudio41 = new Audio('no.wav');
var oraAudio42 = new Audio('nig.wav');
var oraAudio43 = new Audio('yes.wav');
var oraAudio44 = new Audio('leru.mp3');
var oraAudio5 = new Audio('nice.wav');

let oraNumber = document.querySelector(`#ora`);
let oraButton = document.querySelector(`#oraClick`);
let buyButton1 = document.querySelector(`#buy1`);
let buyButton2 = document.querySelector(`#buy2`);
let buyButton3 = document.querySelector(`#buy3`);
let result = document.querySelector(`#result`);
let img1 = document.querySelector(`#img1`);
let endGame = document.querySelector(`#endGame`);
let endP = document.querySelector(`#endP`);
let stand1 = document.querySelector(`#stand`);
let footer1 = document.querySelector(`#footer3`);

endGame.addEventListener(`click`, function(){
    if (ora >= 1200){
        endP.innerHTML = `Поздравляю, ты завершил первый уровень!!! Вот тебе подарок: <a href="https://yandex.ru/video/preview/16554280298984749718">Ссылка</a>`;
    }
    else{
        endP.innerHTML = `Недостаточно средств, лошок!`;
    }
})

document.addEventListener(`keydown`, function(){
    ora += oraPlus;
    oraNumber.innerHTML = ora + ` ` + oraVid;
    if (oraVid == "Ора"){
        oraAudio1.play();
    }
    else if(oraVid == "Муда"){
        let random = randomInteger(1, 3);
        if (random == 1){
            oraAudio21.play();
        }
        else if (random == 2){
            oraAudio22.play();
        }
        else if (random == 3){
            oraAudio23.play();
        }
    }
    else if(oraVid == "Ах"){
        let random = randomInteger(1, 2);
        if (random == 1){
            oraAudio31.play();
        }
        else if (random == 2){
            oraAudio32.play();
        }
    }
    else if (oraVid == "Я лох"){
        let random = randomInteger(1, 4);
        if (random == 1){
            oraAudio41.play();
        }
        else if (random == 2){
            oraAudio42.play();
        }
        else if (random == 3){
            oraAudio43.play();
        }
        else if (random == 4){
            oraAudio44.play();
        }
    }
})

oraButton.addEventListener(`click`, function(){
    ora += oraPlus;
    oraNumber.innerHTML = ora + ` ` + oraVid;
    if (oraVid == "Ора"){
        oraAudio1.play();
    }
    else if(oraVid == "Муда"){
        let random = randomInteger(1, 3);
        if (random == 1){
            oraAudio21.play();
        }
        else if (random == 2){
            oraAudio22.play();
        }
        else if (random == 3){
            oraAudio23.play();
        }
    }
    else if(oraVid == "Ах"){
        let random = randomInteger(1, 2);
        if (random == 1){
            oraAudio31.play();
        }
        else if (random == 2){
            oraAudio32.play();
        }
    }
    else if (oraVid == "Я лох"){
        let random = randomInteger(1, 4);
        if (random == 1){
            oraAudio41.play();
        }
        else if (random == 2){
            oraAudio42.play();
        }
        else if (random == 3){
            oraAudio43.play();
        }
        else if (random == 4){
            oraAudio44.play();
        }
    }
});

buyButton1.addEventListener(`click`, function(){
    if (ora >= 200 && oraVid != `Муда`){
        oraPlus = 2;
        oraVid = `Муда`;
        stand = `The World`;
        result.innerHTML = ``;
        img1.src = `world.jpg`;
        oraButton.innerHTML = `Муда`;
        ora -= 200;
        stand1.innerHTML = `Твой стенд: ` + stand;
        oraAudio5.play();
    }
    else{
        result.innerHTML = `Пошел нахуй`;
    }
})

buyButton2.addEventListener(`click`, function(){
    if (ora >= 500 && oraVid != `Ах`){
        oraPlus = 4;
        oraVid = `Ах`;
        stand = `Silver Chariot`;
        result.innerHTML = ``;
        img1.src = `silver.jpeg`;
        oraButton.innerHTML = `Ах`;
        ora -= 500;
        stand1.innerHTML = `Твой стенд: ` + stand;
        oraAudio5.play();
    }
    else{
        result.innerHTML = `Пошел нахуй`;
    }
})

buyButton3.addEventListener(`click`, function(){
    if (ora >= 1000 && oraVid != `Я лох`){
        footer1.classList.toggle(`footer2`);
        oraPlus = 5;
        oraVid = `Я лох`;
        stand = `Стенд Арекусей`;
        result.innerHTML = ``;
        img1.src = `arekusey.gif`;
        oraButton.innerHTML = `Я лох`;
        ora -= 1000;
        stand1.innerHTML = `Твой стенд: ` + stand;
        oraAudio5.play();
    }
    else{
        result.innerHTML = `Пошел нахуй`;
    }
})