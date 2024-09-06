const dndButton = document.getElementById('dnd-button');

dndButton.addEventListener('click', () => {
  dndButton.classList.toggle('active');
  if (dndButton.classList.contains('active')) {
    dndButton.textContent = 'Disturb Me';
  } else {
    dndButton.textContent = 'Do Not Disturb';
  }
});
