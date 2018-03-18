
const navLinks = document.querySelectorAll('#main-nav a');


for(let i=0, j=navLinks.length; i<j; i++) {
  navLinks[i].addEventListener('click', navHandler);
}

function navHandler(event) {
  console.log('works');
  for(let i=0, j=navLinks.length; i<j; i++) {
    navLinks[i].setAttribute('class', '');
  }
  this.setAttribute('class', 'active');
}

