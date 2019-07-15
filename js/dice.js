document.addEventListener('DOMContentLoaded', () => {

  const main = document.querySelector('.main');

  showDiceNumberOptions();

  function showDiceNumberOptions() {
    const howMany = document.createElement('div');
    howMany.className = 'question';
    howMany.textContent = 'How many dice?';
    main.appendChild(howMany);
  }

})
