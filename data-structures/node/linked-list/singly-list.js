const Node = require('./node');

function SinglyList() {
  this.head = new Node('head');
}

// Insert an item after an item
SinglyList.prototype.insert = function(newItem, afterItem) {
  let newNode = new Node(newItem);
  let afterNode = this.find(afterItem);
  newNode.next = afterNode.next;
  afterNode.next = newNode;
};

SinglyList.prototype.remove = function(item) {
  let previousNode = this.findPrevious(item);
  if (previousNode.next !== null) {
    previousNode.next = previousNode.next.next;
  }
};

SinglyList.prototype.display = function() {
  let currentNode = this.head;
  while (currentNode.next != null) {
    console.log(currentNode.next.element);
    currentNode = currentNode.next;
  }
};

SinglyList.prototype.find = function(item) {
  let currentNode = this.head;
  while (currentNode.element !== item) {
    currentNode = currentNode.next;
  }
  return currentNode;
};

SinglyList.prototype.findPrevious = function(item) {
  let currentNode = this.head;
  while (currentNode.next !== null && currentNode.next.element !== item) {
    currentNode = currentNode.next;
  }
  return currentNode;
};

module.exports = SinglyList;
