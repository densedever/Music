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
