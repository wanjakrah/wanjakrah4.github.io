var mijnAfbeelding = document.querySelector('img');

mijnAfbeelding.onclick = function() {
    var mijnSrc = mijnAfbeelding.getAttribute('src');
    if(mijnSrc === 'images/100-dollar-bill-roll.jpg') {
      mijnAfbeelding.setAttribute ('src','images/treasure-box.jpg');
    } else {
      mijnAfbeelding.setAttribute ('src','images/100-dollar-bill-roll.jpg');
    }
}

var mijnKnop = document.querySelector('button');
var mijnHoofding= document.querySelector('h1');

function stelNaamIn() {
  var mijnNaam = prompt('Voer uw naam in');
  localStorage.setItem('naam', mijnNaam);
  mijnHoofding.textContent = 'Succes met uw geld beheren, ' + mijnNaam;
}

if(!localStorage.getItem('naam')) {
  stelNaamIn();
} else {
  var opgeslagenNaam = localStorage.getItem('naam');
  mijnHoofding.textContent = 'Succes met uw geld beheren, ' + opgeslagenNaam;
}

mijnKnop.onclick = function() {
  stelNaamIn();
}