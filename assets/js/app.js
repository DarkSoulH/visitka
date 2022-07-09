"use strict"
  const localization = document.getElementById("switchlang");
  function handleClickLang() {
    localization?.checked ? window.location.href = 'index_en.html': window.location.href = 'index.html'
  }
  localization.addEventListener('click', handleClickLang)
