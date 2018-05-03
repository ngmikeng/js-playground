export const person = {
  name: 'John Doe',
  job: 'IT'
}

export const helloName = (name) => {
  return name;
}

async function getPosts() {
  let response = await fetch('https://jsonplaceholder.typicode.com/posts');
  let data = await response.json();

  return data;
}

getPosts().then((data) => console.log(data));