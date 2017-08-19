import lib from './lib.js'

window.onload = () =>
    document.body.innerHTML += '<div>' + window.location.pathname
        + '</div><div>' + lib + '</div>'