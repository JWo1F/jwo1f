(function() {
  const nameElement = document.querySelector('#name');
  const name = nameElement.innerHTML;

  nameElement.innerHTML = '';

  (function insert() {
    setTimeout(() => {
      nameElement.innerHTML = name.slice(0, nameElement.innerHTML.length + 1);
      if (nameElement.innerHTML !== name) insert();
      else finish();
    }, 50);
  })();

  function finish() {
    setTimeout(() => {
      document.querySelector('.app__hidden').classList.add('app__visible');
      document.querySelector('.app__blinker').classList.add('app__blinker_blink');
    }, 250);
  }
})();
