const path = require('path');
const express = require('express');
const app = express();
const cors = require('cors');
const config = require('./config');
const helmet = require('helmet');

const dbConnection = require('./db');

const postRoutes = require('./routes/posts.routes');

dbConnection.connectToDb();

app.use(helmet());
app.use(cors());
app.use(express.static(path.join(__dirname + '/../client/build')));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use('/api', postRoutes);

if (process.env.MODE === 'production') {
  app.use('*', (req, res) => {
    res.sendFile(path.join(__dirname + '../client/build/index.html'));
  });
}

console.log(process.env.MODE);

app.listen(config.PORT, () =>
  console.log(`Server running on port ${config.PORT}`)
);
