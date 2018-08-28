function List() {
  this.listSize = 0;
  this.position = 0;
  this.dataStore = [];
  // this.contains = contains;
}

List.prototype.clear = function(element) {
  this.dataStore = [];
};

List.prototype.findIndex = function(element) {
  for (let i = 0; i < this.dataStore.length; ++i) {
    if (this.dataStore[i] === element) {
      return i;
    }
  }
  return -1;
};

List.prototype.find = function(element) {
  if (element) {
    let index = this.findIndex(element);
    return this.dataStore[index];
  }
  return;
};

List.prototype.append = function(element) {
  this.dataStore[this.listSize++] = element;
};

List.prototype.remove = function(element) {
  let foundAt = this.findIndex(element);
  if (foundAt > -1) {
    this.dataStore.splice(foundAt, 1);
    --this.listSize;
    return true;
  }
  return false;
};

List.prototype.length = function() {
  return this.listSize;
};

List.prototype.toString = function() {
  return this.dataStore;
};

List.prototype.insert = function(element, after) {
  let insertAfter = this.findIndex(after);
  if (insertAfter > -1) {
    this.dataStore.splice(insertAfter + 1, 0, element);
    this.listSize = this.listSize + 1;
    return true;
  }
  return false;
};

/**
 * Traversing
 */
List.prototype.front = function() {
  this.position = 0;
};

List.prototype.end = function() {
  if (this.listSize > 0) {
    this.position = this.listSize - 1;
  }
};

List.prototype.prev = function() {
  if (this.position > 0) {
    this.position = this.position - 1;
  }
};

List.prototype.next = function() {
  if (this.position < this.listSize - 1) {
    this.position = this.position + 1;
  }
};

List.prototype.currentPosition = function() {
  return this.position;
};

List.prototype.moveTo = function(pos) {
  if (pos >= 0 && pos <= this.listSize - 1) {
    this.position = pos;
  }
};

List.prototype.getElement = function() {
  return this.dataStore[this.position];
};

module.exports = List;
