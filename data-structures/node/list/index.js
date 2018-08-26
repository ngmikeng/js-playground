const List = require('./list');

const listItems = new List();
listItems.append('One');
listItems.append('Two');
listItems.append('Three');
listItems.append('Four');
console.log(listItems.toString());
listItems.remove('Three');
console.log(listItems.toString());
