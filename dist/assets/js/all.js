"use strict";

// $(document).ready(() => {
var currentPath = location.pathname.split('/');
var pathName = currentPath[currentPath.length - 1] === '' ? 'index' : currentPath[currentPath.length - 1].split('.')[0];
var currentPageLink = document.querySelector("#".concat(pathName, "-link"));
currentPageLink.classList.toggle('active'); // });
//# sourceMappingURL=all.js.map
