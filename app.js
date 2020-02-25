const express = require('express');
const app = express();

app.listen(3333, () => {
  console.log('Server running on port 3333');
});

const rootController = (req, res) => {
  const snippet = `<h1>Happy Birthday Alan and (belated) Josh!</h1>`;
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

app.get('/', rootController);
app.get('/foo', fooController);
