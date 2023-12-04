
// ======

// const nowTimeDate = new Date()

// window.onload = document.getElementById('output').innerHTML = 'Выберите формат'

// document.querySelector('#full').onclick = function() {
//   document.getElementById('output').innerHTML = `${nowTimeDate.toLocaleDateString()}, ${nowTimeDate.toLocaleTimeString()}`
// }

// document.querySelector('#date').onclick = function() {
//   document.getElementById('output').innerHTML = `${nowTimeDate.toLocaleDateString()}`
// }

// document.querySelector('#time').onclick = function() {
//   document.getElementById('output').innerHTML = `${nowTimeDate.toLocaleTimeString()}`
// }

let mode = 'defolt';
const output = document.getElementById('output');
const fullBtn = document.getElementById('full');
const dateBtn = document.getElementById('date');
const timeBtn = document.getElementById('time');

function bindMode(name) {
  return function() {
    mode = name
    update()
  }
}

fullBtn.onclick = bindMode('full')

dateBtn.onclick = bindMode('date')

timeBtn.onclick = bindMode('time')

// fullBtn.onclick = function() {
//   mode = 'full';
//   update();
// };

// dateBtn.onclick = function() {
//   mode = 'date';
//   update();
// };

// timeBtn.onclick = function() {
//   mode = 'time';
//   update();
// };

update();

setInterval(update, 1000);

function update() {
  output.textContent = format(mode);
}

function format(formatMode) {
  const now = new Date();

  switch(formatMode) {
    case 'time':
      return now.toLocaleTimeString();
    case 'date': 
      return now.toLocaleDateString();
    case 'full':
      return now.toLocaleTimeString() + ' ' + now.toLocaleDateString();
    default:
      return 'Выберите формат';
  }
}
