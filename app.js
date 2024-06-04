const express = require('express');
const bodyParser = require('body-parser');
const entitiesRouter = require('./routes/entities');

const app = express();
app.use(bodyParser.json());

app.use('/api', entitiesRouter);

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

module.exports = app;
