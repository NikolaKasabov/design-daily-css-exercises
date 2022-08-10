const customSelectEl = document.querySelector('.custom-select');
const selectBtn = document.querySelector('.select-btn');
const selectBtnTextEl = selectBtn.querySelector('.text');
const optionsOverlay = document.getElementById('options-overlay');
const optionsUl = document.getElementById('options');


selectBtn.addEventListener('click', () => {
  customSelectEl.classList.add('open');
});

optionsOverlay.addEventListener('click', () => {
  closeSelectOptions();
});


optionsUl.addEventListener('click', (ev) => {
  // if <li> is clicked change the text in the selectBtn
  if (ev.target.parentNode === optionsUl) {
    selectBtnTextEl.innerText = ev.target.innerText;
    closeSelectOptions();
    console.log('Selected option: ', selectBtnTextEl.innerText);
  }
});

function closeSelectOptions() {
  customSelectEl.classList.remove('open');
}
