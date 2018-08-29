const fs = require('fs');
const List = require('./list');

const listMovies = new List();

function displayList(list) {
  for (list.front(); list.currentPosition() < list.length(); list.next()) {
    console.log(list.getElement());
  }
}

fs.readFile('./node/list/best-films.txt', { encoding: 'utf8' }, (err, data) => {
  if (err) {
    throw err;
  }

  const movies = data.split('\n');
  for (let i = 0; i < movies.length; i++) {
    listMovies.append(movies[i].trim());
  }

  displayList(listMovies);
});
