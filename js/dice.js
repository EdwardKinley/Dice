document.addEventListener('DOMContentLoaded', () => {

  const main = document.querySelector('.main');

  const maxDiceQuantity = 9;
  const diceQuantityOptions = [];
  nextSquare = 0;

  // const diceQuantityOptions = [1, 2, 3, 4, 5, 6, 7, 8, 9];

  addDiceQuantityOptionsToArray();
  determineNextSquare();
  showDiceQuantityOptions();

  function addDiceQuantityOptionsToArray() {
    for (i=0; i<maxDiceQuantity; i++) {
      diceQuantityOptions.push(i+1);
    }
  }

  function determineNextSquare() {
    j=maxDiceQuantity;
    while (nextSquare == 0) {
      // console.log(j);
      // console.log(Math.sqrt(j));
      if (Number.isInteger(Math.sqrt(j))) {
        nextSquare = j;
      } else {
        j++;
      }
    }
  }

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
      const quantity = document.createElement('div');
      quantity.className = 'quantity';
      quantity.textContent = diceQuantityOptions[i];
      quantity.style.height = `${94/(nextSquare**0.5)}%`;
      quantity.style.width = `${94/(nextSquare**0.5)}%`;
      quantity.style.minWidth = `${94/(nextSquare**0.5)}%`;
      quantity.style.margin = `${3/(nextSquare**0.5)}%`;
      quantity.style.fontSize = `${45/(diceQuantityOptions.length**0.5)}vh`;
      quantity.style.lineHeight = `${88/(nextSquare**0.5)}vh`;
      numbersSpace.appendChild(quantity);
      quantity.addEventListener('click', () => {
        // console.log(parseInt(quantity.textContent));
        rollDice(parseInt(quantity.textContent))
      })
    };
  }

  function rollDice(n) {
    main.innerHTML = '';
    for (i=0; i<n; i++) {
      console.log('roll', i+1);
    }
  }

})
