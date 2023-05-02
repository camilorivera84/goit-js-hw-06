const decrement = document.querySelector('[data-action="decrement"]');
const increment = document.querySelector('[data-action="increment"]');
const valueCounter = document.getElementById('value');

let counterValue = 0;

decrement.addEventListener('click', () => {
  counterValue--;
  valueCounter.textContent = counterValue;
});

increment.addEventListener('click', () => {
  counterValue++;
  valueCounter.textContent = counterValue;
});
