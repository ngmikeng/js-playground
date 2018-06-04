
function List() {
  this.listSize = 0;
  this.pos = 0;
  this.dataStore = [];

  // this.clear = clear;
  // this.find = find;
  // this.insert = insert;
  // this.append = append;
  // this.remove = remove;
  // this.front = front;
  // this.end = end;
  // this.prev = prev;
  // this.next = next;
  // this.length = length;
  // this.currPos = currPos;
  // this.moveTo = moveTo;
  // this.getElement = getElement;
  // this.length = length;
  // this.contains = contains;
}

List.prototype.clear = function(element) {
  this.dataStore = [];
};

List.prototype.find = function(element) {
  for (var i = 0; i < this.dataStore.length; ++i) {
    if (this.dataStore[i] === element) {
      return i;
    }
  }
  return -1;
};

List.prototype.append = function(element) {
  this.dataStore[this.listSize++] = element;
};

List.prototype.remove = function(element) {
  var foundAt = this.find(element);
  if (foundAt > -1) {
    this.dataStore.splice(foundAt, 1);
    --this.listSize;
    return true;
  }
  return false;
};

