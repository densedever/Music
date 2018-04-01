

const navLinks = document.querySelectorAll('#main-nav a');
const sections = document.querySelectorAll('.navbarshowhide');
const learnSections = document.querySelectorAll('.rolling-content');

document.addEventListener('ready', function() {
  var navLinks = document.querySelectorAll('#main-nav a');
  var sections = document.querySelectorAll('.navbarshowhide');
  
  navLinks.forEach(l => l.addEventListener('click', navHandler));
  
  function navHandler(e) {
    section.forEach(s => s.setAttribute('class', 'read'));
  
    var index = navLinks.indexOf(this);
    sections[index].setAttribute('class', 'current');
  }
});

/*
$(function() {
var navLinks = $('#main-nav a');
var sections = $('.navbarshowhide');
sections[0].addClass('current');

navLinks.on('click', navHandler);

function navHandler(e) {
for(var i in sections) { 
sections[i].removeClass('current'); 
sections[i].addClass('read');
}

var index = navLinks.indexOf(this);
sections[index].removeClass('read');
sections[index].addClass('current');
}
});
*/

/*
for(let i=0; i<navLinks.length; i++) {
  navLinks[i].addEventListener('click', navHandler);
}

function navHandler(event) {
  // deactivate all nav links
  for(let i=0; i<navLinks.length; i++) {
    navLinks[i].setAttribute('class', '');
  }

  // hide all sections in the 'learn' section
  for(let i=0; i<learnSections.length; i++) {
    learnSections[i].setAttribute('class', 'read');
  }
  
  // set all sections to hidden
  for(let i=0, j=sections.length; i<j; i++) {
    sections[i].setAttribute('class', 'read');
  }
  // show current
  //sections[0].setAttribute('class', 'current');

  // light up the currently active tab:
  this.setAttribute('class', 'active');

  // show first learn section:
  //learnSections[0].setAttribute('class', 'current');
}

// TODO: 
// include function for showing/hiding individual sections ('.rolling-content').
// show/hide main sections based on navbar clicks.


navLinks[0].setAttribute('class', 'active');
*/
