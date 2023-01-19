const aboutInfo = document.querySelectorAll('.info');
const infoContent = document.querySelectorAll('.info-content');

const show = (infoName) => {
  aboutInfo.forEach((info) => {
    info.classList.remove('is-active-info');
  });
  infoContent.forEach((content) => {
    content.classList.remove('is-active-content');
  });
};
