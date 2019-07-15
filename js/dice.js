document.addEventListener('DOMContentLoaded', () => {

  const main = document.querySelector('.main');

  const diceQuantityOptions = [1, 2, 3, 4, 5, 6, 7, 8, 9];

  showDiceQuantityOptions();

  function showDiceQuantityOptions() {
    askHowManyDiceToRoll();
    addNumbersSpace();
    showDiceQuantityNumbers();
  }

  function askHowManyDiceToRoll() {
    const howMany = document.createElement('div');
    howMany.className = 'question';
    howMany.textContent = 'How many dice?';
    main.appendChild(howMany);
  }

  function addNumbersSpace() {
    const numbersSpace = document.createElement('div');
    numbersSpace.className = 'numbersSpace';
    main.appendChild(numbersSpace);
  }

  function showDiceQuantityNumbers() {
    const numbersSpace = document.querySelector('.numbersSpace');
    for (i=0; i<diceQuantityOptions.length; i++) {
      console.log(diceQuantityOptions[i]);
      const quantity = document.createElement('div');
      quantity.className = 'quantity';
      quantity.textContent = diceQuantityOptions[i];
      quantity.style.height = `${100/(diceQuantityOptions.length**0.5)}%`;
      quantity.style.width = `${100/(diceQuantityOptions.length**0.5)}%`;
      quantity.style.minWidth = `${100/(diceQuantityOptions.length**0.5)}%`;
      quantity.style.fontSize = `${80/(diceQuantityOptions.length**0.5)}vh`;
      numbersSpace.appendChild(quantity);
    };
  }

})
