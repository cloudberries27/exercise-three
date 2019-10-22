const express = require('express');
const app = express();
const port = 4000;

const indexRoute = require('./routes/index.js');
const aboutRoute = require('./routes/about.js');

app.use('/', indexRoute);
app.use('/about', aboutRoute);

app.use('/static', express.static('public'));
app.listen(port, () => console.log(`Example app listening on port ${port}!`))
