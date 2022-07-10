"use strict"

const localization = document.getElementById("switchlang");

function handler(event) {
  event.target.checked ?
    window.location.href = 'index_en.html':
    window.location.href = 'index.html'
}

localization.addEventListener('click', handler)

