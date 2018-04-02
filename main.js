const navLinks = document.querySelectorAll('#main-nav a');
const sections = document.querySelectorAll('.navbarshowhide');
const learnSections = document.querySelectorAll('.rolling-content');

navLinks.forEach(l => l.addEventListener('click', navHandler));

sections.forEach(s => s.setAttribute('class', 'read'));
sections[0].setAttribute('class', 'current');

function navHandler(e) {
  sections.forEach(s => s.setAttribute('class', 'read')); // hide all sections
  let index;
  for(let i=0; i<navLinks.length; i++) {
    if(navLinks[i] === this) {
      index = i;
      break;
    }
  }
  sections[index].setAttribute('class', 'current');
}

let currentlyViewing = 0;


window.addEventListener('keypress', arrowHandler);

function arrowHandler(event) {
  const key = event.keyCode || event.which;
  
  if(key === 37) {
    if(sections[1].classList.contains('current')) {
      learnSections.forEach(ls => ls.setAttribute('class', 'read'));
      learnSections[--currentlyViewing].setAttribute('class', 'current');
    }
  }

  if(key === 39) {
    if(sections[1].classList.contains('current')) {
      learnSections.forEach(ls => ls.setAttribute('class', 'read'));
      learnSections[++currentlyViewing].setAttribute('class', 'current');
    }
  }
}






