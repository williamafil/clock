"use strict";

$(document).ready(function () {
  var currentPath = location.pathname.split('.')[0].replace('/', '') || 'index';
  var currentPageLink = document.querySelector("#".concat(currentPath, "-link"));
  currentPageLink.classList.toggle('active');
});
//# sourceMappingURL=all.js.map
