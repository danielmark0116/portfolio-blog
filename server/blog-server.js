const path = require('path');
const express = require('express');
const app = express();
const cors = require('cors');
const config = require('./config');
const helmet = require('helmet');
const passport = require('passport');
const jwtStrategy = require('./utils/initJwtStrategy');

const dbConnection = require('./db');

const postRoutes = require('./routes/posts.routes');

dbConnection.connectToDb();

app.use(passport.initialize());
app.use(passport.session());
jwtStrategy.initJwtStrategy();

app.use(helmet());
app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use(config.prefix + '/api', postRoutes);

const staticFilePath = '../client/build';
app.use(express.static(staticFilePath));
app.use('/blog', express.static(staticFilePath));

if (process.env.MODE === 'production') {
  app.use('/', (req, res) => {
    res.sendFile(path.join(__dirname, '/../client/build/index.html'));
  });
} else {
  app.get('*', (req, res) => {
    res.send('no such endpoint');
  });
}

console.log('MODE: ', process.env.MODE);

app.listen(config.PORT, () =>
  console.log(`Server running on port ${config.PORT}`)
);
