document.addEventListener('DOMContentLoaded', () => {

  const main = document.querySelector('.main');

  const maxDiceQuantity = 9;
  const faces = 6;
  const diceQuantityOptions = [];
  optionSquare = 0;

  selectedQuantity = 0;
  selectedSquare = 0;

  addDiceQuantityOptionsToArray();
  optionSquare = determineNextSquare(maxDiceQuantity);
  showDiceQuantityOptions();

  function addDiceQuantityOptionsToArray() {
    for (i=0; i<maxDiceQuantity; i++) {
      diceQuantityOptions.push(i+1);
    }
  }

  function determineNextSquare(n) {
    j = n;
    if (Number.isInteger(Math.sqrt(j))) {
      return j;
    }
    while (!Number.isInteger(Math.sqrt(j))) {
      j++;
      if (Number.isInteger(Math.sqrt(j))) {
        return j;
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
    // console.log(main);
    main.appendChild(numbersSpace);
  }

  function addRollSpace() {
    const rollSpace = document.createElement('div');
    rollSpace.className = 'rollSpace';
    main.appendChild(rollSpace);
  }

  function showDiceQuantityNumbers() {
    const numbersSpace = document.querySelector('.numbersSpace');
    for (i=0; i<diceQuantityOptions.length; i++) {
      const quantity = document.createElement('div');
      quantity.className = 'quantity';
      quantity.textContent = diceQuantityOptions[i];
      quantity.style.height = `${94/(optionSquare**0.5)}%`;
      quantity.style.width = `${94/(optionSquare**0.5)}%`;
      quantity.style.minWidth = `${94/(optionSquare**0.5)}%`;
      quantity.style.margin = `${3/(optionSquare**0.5)}%`;
      quantity.style.fontSize = `${45/(optionSquare**0.5)}vh`;
      quantity.style.lineHeight = `${88/(optionSquare**0.5)}vh`;
      numbersSpace.appendChild(quantity);
      quantity.addEventListener('click', () => {
        selectedQuantity = parseInt(quantity.textContent);
        rollDice();
      })
    };
  }

  function rollDice() {
    main.innerHTML = '';
    addRollSpace();
    const rollSpace = document.querySelector('.rollSpace');
    // console.log(rollSpace);
    selectedSquare = determineNextSquare(selectedQuantity);
    for (i=0; i<selectedQuantity; i++) {
      const roll = document.createElement('div');
      roll.className = 'roll';
      roll.style.height = `${80/(selectedSquare**0.5)}%`;
      roll.style.width = `${80/(selectedSquare**0.5)}%`;
      roll.style.minWidth = `${80/(selectedSquare**0.5)}%`;
      roll.style.margin = `${10/(selectedSquare**0.5)}%`;
      roll.style.fontSize = `${45/(selectedSquare**0.5)}vh`;
      roll.style.lineHeight = `${88/(selectedSquare**0.5)}vh`;
      rollSpace.appendChild(roll);
      addColour(roll, i);
    }
  }

  function addColour(die, i) {
    const colours = ['red', 'blue', 'yellow', 'green', 'deeppink', 'rebeccapurple', 'black', 'darkorange', 'saddlebrown'];
    // const rnc = Math.floor(Math.random() * colours.length);
    // const colour = colours[rnc];
    const colour = colours[i];
    die.style.backgroundColor = colour;
    showDots(die, colour);
  }

  function showDots(die, colour) {
    const n = Math.floor(Math.random() * faces) + 1;
    for (k=0; k<9; k++) {
      const dot = document.createElement('div');
      dot.className = 'dot';
      dot.id = `dot${k}`;
      dot.style.backgroundColor = colour;
      die.appendChild(dot);
      if (n==1) {
        if (k==4) {
          dot.style.backgroundColor = 'white';
        }
      } else if (n==2) {
        if (k==2 || k==6) {
          dot.style.backgroundColor = 'white';
        }
      } else if (n==3) {
        if (k==2 || k==4 || k==6) {
          dot.style.backgroundColor = 'white';
        }
      } else if (n==4) {
        if (k==0 || k==2 || k==6 || k==8) {
          dot.style.backgroundColor = 'white';
        }
      } else if (n==5) {
        if (k==0 || k==2 || k==4 || k==6 || k==8) {
          dot.style.backgroundColor = 'white';
        }
      } else if (n==6) {
        if (k==0 || k==2 || k==3 || k==5 || k==6 || k==8) {
          dot.style.backgroundColor = 'white';
        }
      }
    }
  }



})
