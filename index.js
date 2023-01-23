const aboutInfo = document.querySelectorAll('.info');
const infoContent = document.querySelectorAll('.info-content');
const infoContentSkills = document.getElementById('skills');
const hamburger = document.getElementById('hamburger');
const sideMenu = document.getElementById('side-menu');

const clearBars = () => {
  hamburger.addEventListener('click', () => {
    for (let i = 0; i < hamburger.children.length; i++) {
      hamburger.children[i].classList.toggle('cross');
      openClose(i);
    }
  });
};

//this function just opens and closes the side menu and changes the position of the cross/hamburger
const openClose = (i) => {
  if (hamburger.children[0].classList.value == 'bar1') {
    sideMenu.style.right = '-200px';
    hamburger.style.position = '';
  } else {
    sideMenu.style.right = 0;
    hamburger.style.position = 'fixed';
  }
};

const addHighlight = () => {
  aboutInfo.forEach((info) => {
    info.addEventListener('click', (e) => {
      removeActiveClass();
      e.currentTarget.classList.add('is-active-info');
      let contentTarget = e.currentTarget.attributes.pseudoid.value;
      contentTarget = document.getElementById(contentTarget);
      contentTarget.classList.add('is-active-content');
    });
  });
};

//this function removes the is active class from every class item
const removeActiveClass = () => {
  aboutInfo.forEach((info) => {
    info.classList.remove('is-active-info');
  });
  infoContent.forEach((content) => {
    content.classList.remove('is-active-content');
  });
  infoContentSkills.classList.remove('is-active-content');
};

addHighlight();
clearBars();
