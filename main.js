
const navLinks = document.querySelectorAll('#main-nav a');
const sections = document.querySelectorAll('.read');

for(let i=0, j=navLinks.length; i<j; i++) {
  navLinks[i].addEventListener('click', navHandler);
}

function navHandler(event) {
  for(let i=0, j=navLinks.length; i<j; i++) {
    navLinks[i].setAttribute('class', '');
  }
  for(let i=0, j=sections.length; i<j; i++) {
    // set all to hidden
    sections[i].setAttribute('class', sections[i].className.replace(sections[i].className, 'read'))
  }
  // show current
  
  this.setAttribute('class', 'active');
}

// TODO: 
// include function for showing/hiding individual sections ('.rolling-content').
// show/hide main sections based on navbar clicks.