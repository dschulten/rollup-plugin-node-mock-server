import lib from './lib';

window.onload = function () {
  document.body.innerHTML += `<div>${window.location.href}</div><div>${lib}</div>`;
};
