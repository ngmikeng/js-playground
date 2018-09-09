
// Virtualize Queue using Array
function Queue() { // FIFO
  this.dataStore = [];
  this.top = 0;
}

Queue.prototype.enqueue = function(element) {
  this.dataStore.push(element);
};

Queue.prototype.dequeue = function() {
  return this.dataStore.shift();
};

Queue.prototype.front = function() {
  return this.dataStore[0];
};

Queue.prototype.back = function() {
  return this.dataStore[this.dataStore.length - 1];
};

Queue.prototype.isEmpty = function() {
  return this.dataStore.length == 0;
};

module.exports = Queue;
