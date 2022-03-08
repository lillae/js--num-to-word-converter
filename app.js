import confetti from 'https://cdn.skypack.dev/canvas-confetti';

const btn = document.getElementById('btn');
const numInput = document.getElementById('num');
const textArea = document.getElementById('textarea');
const word = document.getElementById('word');
const form = document.getElementById('form');
//let word;

form.addEventListener('submit', (e) => {
  e.preventDefault();
  textArea.classList.add('shadow');
  word.classList.remove('hide');
  word.classList.add('show');
  if (numInput.value !== '') {
    word.textContent = numInput.value;
    numInput.value = '';
  } else {
    word.textContent = 'Ooops, please provide a number';
  }
});
