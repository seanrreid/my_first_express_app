const express = require('express');
const app = express();

app.listen(3333, () => {
  console.log('Server running on port 3333');
});

const rootController = (req, res) => {
  const snippet = `<h1>Hello World</h1>`;
  res
    .status(200)
    .send(snippet)
    .end();
};

const fooController = (req, res) => {
  const snippet = `<h1>Foo Page</h1>`;
  res
    .status(200)
    .send(snippet)
    .end();
};

const catController = (req, res) => {
  res
    .status(200)
    .send(`<h1>Meow</h1>`)
    .end();
};

const dogController = (req, res) => {
  res
    .status(200)
    .send(`<h1>Woof</h1>`)
    .end();
};

app.get('/', rootController);
app.get('/foo', fooController);
app.get('/cat', catController);
app.get('/dog', dogController);
