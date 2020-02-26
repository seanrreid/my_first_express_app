const express = require('express'),
  router = express.Router();

const data = [
  { name: 'Jason', zord: 'T-Rex' },
  { name: 'Billy', zord: 'Triceratops' }
];

router.get('/', (req, res) => {
  res.render('template', {
    locals: {
      title: 'Foo Page!!!',
      arrayOfData: data
    },
    partials: {
      partial: 'partial-foo'
    }
  });
});

module.exports = router;
