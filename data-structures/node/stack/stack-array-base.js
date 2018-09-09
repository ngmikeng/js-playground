
// Virtualize Stack using Array
function Stack() { // LIFO
  this.dataStore = [];
  /*
   * To keep track of where the top element is, as well as keeping track of where to add a new
   * element, we use a top variable that is incremented when we push new elements onto
   * the stack and is decremented when we pop elements off the stack.
   */
  this.top = 0;
}

Stack.prototype.push = function(element) {
  this.dataStore[this.top++] = element;
};

// Return the element in the top position and then decrements the top variable.
Stack.prototype.pop = function() {
  return this.dataStore[--this.top];
};

// Return the element in the top position
Stack.prototype.peek = function() {
  return this.dataStore[this.top - 1];
};

Stack.prototype.length = function() {
  return this.top;
};

Stack.prototype.clear = function() {
  this.top = 0;
};

module.exports = Stack;
