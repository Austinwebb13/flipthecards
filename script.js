var btns = document.querySelectorAll('.box');
var boxes = document.querySelector('.boxes');
//let cleared = 0;
var i;
var matchColor = [];
var match = [];
var youLose;

//get the btn colors and reveal the color
for (i = 0; i < btns.length; ++i) {
  btns[i].addEventListener('click', showColor);
  
}

function showColor() {
  this.style.backgroundColor = this.getAttribute('data-color');
  matchColor.push(this.getAttribute('data-color'));
  match.push(this);
  if (match.length === 2) {
   checkMatch(); 
  }
}
 

//if the two index match chnage the color to blend into the background
function checkMatch() {
    
  if (matchColor[0] === matchColor[1]) {
  
    setTimeout(function () {
      match[0].style.backgroundColor = 'orange';
      match[1].style.backgroundColor = 'orange'; 
      match[0].style.border = 'orange';
      match[1].style.border = 'orange';
    }, 400);
     
 //if they dont match
  } else {
  setTimeout(function () {
    match[0].style.backgroundColor = 'white';
    match[1].style.backgroundColor = 'white';
  }, 400);
}
  setTimeout(function (){
    matchColor = [];
    match=[];  
}, 400);

var youLose = setTimeout(Lose, 25000);
    
function Lose() {
  alert("Game Over. Please Refresh The Page!");
   }
}
//function youWin() {
//if(cleared == btns.length){
 // alert('you win');
//}
//}
