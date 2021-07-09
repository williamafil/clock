console.log('Hello!');

$(document).ready(() => {
  console.log('HesSchool Hello!');
});

document.querySelectorAll('.nav-link').forEach((link) => {
  link.addEventListener('click', function() {
    console.log('this link: ', this)
    console.log(link)
  })
});