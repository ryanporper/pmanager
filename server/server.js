const express = require('express');
const cors = require('cors');
const port = 8000;

const { destinationRouter } = require('./routes/destination.routes');

require('./config/mongoose.config');

const app = express();

app.use(cors());

app.use(express.json());

app.use('/api/destinations', destinationRouter);

app.listen(port, () =>
  console.log(`Listening on port ${port} for REQuests to RESpond to.`)
);