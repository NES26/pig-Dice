 var randomNumbaer = Math.floor(math.random() * 6) + 1 // 1 - 6
var playerOneImages = "img/Dice"+randomNumber;
var randomNumbaer1 = Math.floor(math.random() * 6) + 1 // 1 - 6
var playerOneImages1 = "img/Dice"+randomNumber1;


document.querySelector('.img1').setAttribute('src'. playerOneImg);
document.querySelector('.img2').setAttribute('src'. playerOneImg);


if (playerOneImages > playerOneImg1) {
    document.querySelector('h1').innerHTML = 'player 1 Win';
} else if (playerOneImg < playerOneImg) {
    document.querySelector(h1).innerHTML = 'playe 2 Win';
} else {
    document.querySelector(h1).innerHTML = 'Roll Again';
}