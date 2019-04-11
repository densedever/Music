const navLinks = document.querySelectorAll('#main-nav a'),
      sections = document.querySelectorAll('.navbarshowhide'),
      learnSections = document.querySelectorAll('.rolling-content'),
      pages = document.getElementById('pagelist');



for(let i = 0; i<learnSections.length; i++) {
  pages.innerHTML += `<button type='button' class='page'>${i+1}</button>`;
}

function navHandler(e) {
  sections.forEach(s => s.setAttribute('display', 'none'));
  let index;
  for(let i=0; i < navLinks.length; i++) {
    if(navLinks[i] === this) {
      index = i;
      break;
    }
  }
  sections[index].setAttribute('display', 'block');
}

// why is this here?
function pageTurn() {
  learnSections.forEach(s => s.setAttribute('display', 'none'));
  let index;
  for(let i=0; i < learnSections.length; i++) {
    if(learnSections[i] === this) {
      index = i;
      break;
    }
  }
  learnSections[index].setAttribute('display', 'block');
}

let currentlyViewing = 0;

function arrowHandler(event) {
  const key = event.keyCode || event.which;
  
  if(key === 37) {
    if(sections[1].style.display === 'block') {
      learnSections.forEach(ls => ls.setAttribute('display', 'none'));
      learnSections[--currentlyViewing].setAttribute('display', 'block');
    }
  }
  
  if(key === 39) {
    if(sections[1].display.style === 'block') {
      learnSections.forEach(ls => ls.setAttribute('display', 'none'));
      learnSections[++currentlyViewing].setAttribute('display', 'block');
    }
  }
}

navLinks.forEach(l => l.addEventListener('click', navHandler));

sections.forEach(s => s.setAttribute('display', 'none'));
sections[0].setAttribute('display', 'block');

window.addEventListener('keypress', arrowHandler);

pages.querySelectorAll('.page').forEach(p => p.addEventListener('click', pageHandler));

