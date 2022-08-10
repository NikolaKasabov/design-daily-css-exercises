const inputEl = document.getElementById('quantity');
const decreaseBtn = document.getElementById('decrease');
const increaseBtn = document.getElementById('increase');

inputEl.addEventListener('focusout', () => {
  roundDownInputValue();
});

decreaseBtn.addEventListener('click', () => {
  roundDownInputValue();
  let value = +inputEl.value;
  value--;
  if (value < 0) value = 0;
  inputEl.value = value;
});

increaseBtn.addEventListener('click', () => {
  roundDownInputValue();
  let value = +inputEl.value;
  value++;
  inputEl.value = value;
});

function roundDownInputValue() {
  const value = +inputEl.value;
  let newValue = 0;

  if (value && value > 0) {
    newValue = Math.floor(value);
  }

  inputEl.value = newValue;
}