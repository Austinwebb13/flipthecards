
var btn = document.querySelectorAll('.box');
var i;
var match = [];
var matchColor = [];

//Event Listeners to respond to a click on the squares.
for (i = 0; i < btn.length; ++i) {
 btn[i].addEventListener('click', showColor);
}


function showColor(){
	this.style.backgroundColor = this.getAttribute('data-color');
	match.push(this.getAttribute('data-color'));
	console.log(match);
	if(match.length === 2){
		checkMatch();
		match = [];
        if (match.length === 2) {
            checkMatch();
	}
}

function checkMatch(){
	if (matchColor[0] == matchColor[1]) {
        console.log("Match");
        setTimeout(function () {
          match[0].style.backgroundColor = 'white';
          match[1].style.backgroundColor = 'white';
        }, 500);

      } else {
        console.log("Not a match");
        setTimeout(function() {
          match[0].style.backgroundColor = 'black';
          match[1].style.backgroundColor = 'black';
    
        }, 500);
      }
      setTimeout(function() {
        match = [];
        matchColor = [];
      }, 600);
}
}