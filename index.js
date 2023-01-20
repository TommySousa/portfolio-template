const aboutInfo = document.querySelectorAll('.info');
const infoContent = document.querySelectorAll('.info-content');
const infoContentSkills = document.getElementById('skills');

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
