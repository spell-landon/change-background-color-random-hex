
var body = document.querySelector('body');

var button = document.getElementById('clickMe');
var colorsArray = ["#ff7d56", "#ffd56b", "#94fa50", "#53fcdd", "#6f80ff", "#b95eff", "#ff5dd9", "#ff3d40"];
var hexId = document.getElementById("main_text");
var randomColor = Math.floor(Math.random() * 16777215).toString(16);
/*function changeColor() {
    var randomHex = colorsArray[Math.floor(Math.random() * colorsArray.length)];
    document.body.style.backgroundColor = randomHex;
    var el = document.getElementById("number");
    el.textContent = randomHex;
};
button.addEventListener('click', changeColor);
*/


function setBg() {
    var randomColor = Math.floor(Math.random() * 16777215).toString(16);
    document.body.style.backgroundColor = "#" + randomColor;
    var el = document.getElementById("number");
    el.textContent = "#" + randomColor;
};
clickMe.addEventListener('click', setBg);