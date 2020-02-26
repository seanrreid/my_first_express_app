const express = require('express'),
  router = express.Router();

router.get('/', (req, res) => {
  res.render('template', {
    locals: {
      title: 'CAT PAGE!!!'
    },
    partials: {
      partial: 'partial-cat'
    }
  });
});

module.exports = router;
