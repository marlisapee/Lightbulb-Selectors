// Write your code here
const light1 = document.querySelector('#lightbulb1');
const light2 = document.querySelector('#lightbulb2');
const light3 = document.querySelector('#lightbulb3');
const output = document.querySelector('.subtitle');

let count = 0;

light1.addEventListener('click', function () {
  count++;
  light1.classList.toggle('active');
  output.innerHTML(`You've clicked the lights ${count} times`);
});

light2.addEventListener('click', function () {
  count++;
  light2.classList.toggle('active');
  output.innerHTML(`You've clicked the lights ${count} times!`);
});

light3.addEventListener('click', function () {
  count++;
  light3.classList.toggle('active');
  output.innerHTML(`You've clicked the lights ${count} times!`);
});
