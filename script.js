var btns = document.querySelectorAll('.box');


for (i = 0; i < btns.length; ++i) {
  btns[i].addEventListener('click', showColor);
}


var i;
var matchColor = [];
var match = [];
var youLose;


function showColor() {
  this.style.backgroundColor = this.getAttribute('data-color');
  matchColor.push(this.getAttribute('data-color'));
  match.push(this);
  if (match.length === 2) {
   checkMatch(); 
  }
}


function checkMatch() {
  if (matchColor[0] === matchColor[1]) {
  
    setTimeout(function () {
      match[0].style.backgroundColor = 'orange';
      match[1].style.backgroundColor = 'orange'; 
      match[0].style.border = 'orange';
      match[1].style.border = 'orange';
    }, 400);
    
} else {
  setTimeout(function () {
    match[0].style.backgroundColor = 'white';
    match[1].style.backgroundColor = 'white';
  }, 400);
}

  setTimeout(function (){
    matchColor = [];
    match=[];
   
}, 400);}


 var youLose = setTimeout(Alert, 25000);

function Alert() {
  alert("Game Over. Please Refresh The Page!");
 }
