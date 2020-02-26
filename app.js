const express = require('express'),
  es6Renderer = require('express-es6-template-engine'),
  app = express();

app.engine('html', es6Renderer);
app.set('views', 'views');
app.set('view engine', 'html');

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
