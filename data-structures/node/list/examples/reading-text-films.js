const fs = require('fs');
const readline = require('readline');
const List = require('../list');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const listMovies = new List();
const listCustomers = new List();

function Customer(name, movie) {
  this.name = name;
  this.movie = movie;
}

function displayList(list) {
  for (list.front(); list.currentPosition() < list.length(); list.next()) {
    const element = list.getElement();
    if (element instanceof Customer) {
      console.log(`${element.name}, ${element.movie}`);
    } else {
      console.log(element);
    }
  }
}

function initListDataFromTextFileContent(list, data) {
  if (data && data.length > 0) {
    const movies = data.split('\n');
    for (let i = 0; i < movies.length; i++) {
      list.append(movies[i].trim());
    }
  }
}

function handleReadlineInput(readlineInterface, cb) {
  if (readlineInterface) {
    readlineInterface.question('Enter your name: ', name => {
      if (name) {
        readlineInterface.question('What movie would you like? ', (movie) => {
          if (movie && listMovies.contains(movie)) {
            cb(null, name, movie);
          } else {
            cb(new Error('This movie is not available!'));
          }
        });
      } else {
        cb(new Error('Name is empty'));
      }
    });

    return readlineInterface;
  } else {
    cb(new Error('readlineInterface is empty'));
  }
}

fs.readFile('./node/list/examples/best-films.txt', { encoding: 'utf8' }, (err, data) => {
  if (err) {
    throw err;
  }

  initListDataFromTextFileContent(listMovies, data);
  displayList(listMovies);

  handleReadlineInput(rl, (err, name, movie) => {
    if (err) {
      console.log(err.message);
    } else {
      const customer = new Customer(name, movie);
      listCustomers.append(customer);
      listMovies.remove(movie);

      console.log('Available movies: ');
      displayList(listMovies);
      console.log('Customers rentals: ');
      displayList(listCustomers);
    }

    rl.close();
  });

});
