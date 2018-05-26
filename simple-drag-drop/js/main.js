const fill = document.querySelector('.fill');
const empties = document.querySelectorAll('.empty');

// Fill listeners
fill.addEventListener('dragstart', dragStart);
fill.addEventListener('dragend', dragEnd);

// Loop through empties and call drag events
for (const empty of empties) {
  empty.addEventListener('dragover', dragOver);
  empty.addEventListener('dragenter', dragEnter);
  empty.addEventListener('dragleave', dragLeave);
  empty.addEventListener('drop', drogDrop);
}

// Drag functions
function dragStart() {
  console.log('start');
  this.className += ' hold';
  setTimeout(() => {
    this.className = 'invisible';
  }, 0);
}

function dragEnd() {
  console.log('end');
  this.className = 'fill';
}

function dragOver(e) {
  e.preventDefault();
  console.log('over');
}

function dragEnter(e) {
  // e.preventDefault();
  console.log('enter');
  this.className += ' hovered';
}

function dragLeave() {
  console.log('leave');
  this.className = 'empty';
}

function drogDrop() {
  console.log('drop');
  this.className = 'empty';
  this.append(fill);
}