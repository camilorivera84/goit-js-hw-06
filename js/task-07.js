const fontSize = document.getElementById('font-size-control');
const text = document.getElementById('text');
fontSize.addEventListener('input', function () {
  text.style.fontSize = `${fontSize.value}px`;
});
