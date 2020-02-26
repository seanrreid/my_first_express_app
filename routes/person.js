const express = require('express'),
  router = express.Router();

router.get('/:firstname?/:lastname?/', (req, res) => {
  let snippet = `<h1>Hello World</h1>`;

  if (!!req.params.firstname) {
    snippet = `<h1>Hello ${req.params.firstname} ${req.params.lastname}</h1>`;
  }

  res
    .status(200)
    .send(snippet)
    .end();
});

module.exports = router;
