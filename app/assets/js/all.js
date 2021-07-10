$(document).ready(() => {
  const currentPath = location.pathname.split('.')[0].replace('/', '')
  const currentPageLink = document.querySelector(`#${currentPath}-link`)
  currentPageLink.classList.toggle('active');
});
