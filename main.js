
const navLinks = document.querySelectorAll('#main-nav a');
const sections = document.querySelectorAll('.navbarshowhide');
const learnSections = document.querySelectorAll('.rolling-content');

navLinks.forEach(link => link.addEventListener('click', navHandler));

function navHandler(event) {
  // deactivate all nav links
  navLinks.forEach(link => link.setAttribute('class', ''));

  // hide all sections in the 'learn' section
  learnSections.forEach(s => s.setAttribute('class', 'read'));
  
  // light up the currently active tab:
  this.setAttribute('class', 'active');
  
  // set all sections to hidden
  for(let i=0, j=sections.length; i<j; i++) {
    sections[i].setAttribute('class', 'read');
  }
  // show current
  sections[0].setAttribute('class', 'current');

  // show first learn section:
  //learnSections[0].setAttribute('class', 'current');
}

// TODO: 
// include function for showing/hiding individual sections ('.rolling-content').
// show/hide main sections based on navbar clicks.


navLinks[0].setAttribute('class', 'active');
