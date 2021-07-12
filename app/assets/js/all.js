// $(document).ready(() => {
  const currentPath = location.pathname.split('/');
  const pathName = currentPath[currentPath.length - 1] === '' ? 'index' : currentPath[currentPath.length - 1].split('.')[0];
  const currentPageLink = document.querySelector(`#${pathName}-link`);
  currentPageLink.classList.toggle('active');
// });