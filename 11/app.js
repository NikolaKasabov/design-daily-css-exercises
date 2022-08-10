const lis = document.querySelectorAll('.left li');

lis.forEach(li => {
  li.addEventListener('click', () => {
    lis.forEach(li => li.classList.remove('selected'));
    li.classList.add('selected');
  });
});
