const TypeWriter = function(txtElement, words, wait = 3000, colors, events = {}) {
  this.txtElement = txtElement;
  this.txtColors = colors || [];
  this.words = words;
  this.txt = '';
  this.wordIndex = 0;
  this.wait = parseInt(wait, 10);
  this.type();
  this.isDeleting = false;
  this.onType = events.onType;
  this.onDeletedWord = events.onDeletedWord;
}

// Type Method
TypeWriter.prototype.type = function() {
  // Current index of word
  const current = this.wordIndex % this.words.length;
  // Get full text of current word
  const fullTxt = this.words[current];

  // Check if deleting
  if (this.isDeleting) {
    // Remove char
    this.txt = fullTxt.substring(0, this.txt.length - 1);
  } else {
    // Add char
    this.txt = fullTxt.substring(0, this.txt.length + 1);
  }

  let colorstyle = '';
  if (this.txtColors.length > 0 && this.txtColors[current]) {
    colorstyle = `color: ${this.txtColors[current]};`;
  }
  // Insert txt into element
  this.txtElement.innerHTML = `<span class="txt" style="${colorstyle}">${this.txt}</span>`;
  if (typeof this.onType === 'function') {
    this.onType(this.txt);
  }

  // Initial Type Speed
  let typeSpeed = 300;

  if (this.isDeleting) {
    typeSpeed /= 2;
  }

  // If word is complete
  if (!this.isDeleting && this.txt === fullTxt) {
    // Make pause at end
    typeSpeed = this.wait;
    // Set delete to true
    this.isDeleting = true;
  } else if (this.isDeleting && this.txt === '') {
    this.isDeleting = false;
    // Move to next word
    this.wordIndex++;
    // Pause before start typing
    typeSpeed = 500;

    if (typeof this.onDeletedWord === 'function') {
      this.onDeletedWord(fullTxt, this.txtColors[this.wordIndex % this.words.length]);
    }
  }

  setTimeout(() => this.type(), typeSpeed);
}

// Init On DOM Load
document.addEventListener('DOMContentLoaded', init);

// Init App
function init() {
  const txtElement = document.querySelector('.txt-type');
  const txtWrapElement = document.querySelector('.txt-wrap');
  const words = JSON.parse(txtElement.getAttribute('data-words'));
  const wait = txtElement.getAttribute('data-wait');
  const txtColors = ['yellow', 'orange', 'aqua', 'red'];
  txtWrapElement.setAttribute('style', `border-top: 0.1em solid ${txtColors[0]}`);
  const events = {
    onType: function(text) {
      // console.log(text);
    },
    onDeletedWord: function(word, color) {
      if (color) {
        txtWrapElement.setAttribute('style', `border-top: 0.1em solid ${color}`);
      }
    }
  };
  // Init TypeWriter
  new TypeWriter(txtElement, words, wait, txtColors, events);
}
