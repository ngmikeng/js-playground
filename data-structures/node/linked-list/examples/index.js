const SinglyList = require('../singly-list');

const cities = new SinglyList();
cities.insert("Conway", "head");
cities.insert("Russellville", "Conway");
cities.insert("Carlisle", "Russellville");
cities.insert("Alma", "Carlisle");
cities.display();
// cities.remove("Carlisle");
// cities.display();
