const express = require('express');
const app = express();

app.listen(3333, () => {
  console.log('Server running on port 3333');
});

const rootController = require('./routes/index'),
  catController = require('./routes/cat'),
  dogController = require('./routes/dog'),
  fooController = require('./routes/foo'),
  personController = require('./routes/person');

app.use('/', rootController);
app.use('/foo', fooController);
app.use('/cat', catController);
app.use('/dog', dogController);
app.use('/person', personController);
