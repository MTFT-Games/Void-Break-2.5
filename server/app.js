//#region Imports
const path = require('path');
const express = require('express');
const favicon = require('serve-favicon');
const compression = require('compression');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const expressHandleBars = require('express-handlebars');
const helmet = require('helmet');
const session = require('express-session');
const redis = require('redis');
const RedisStore = require('connect-redis')(session);

const router = require('./router.js');
const config = require('./config.js');
//#endregion

//#region External connections
mongoose.connect(config.connections.mongo.uri, (err) => {
  if (err) {
    console.error('[FATAL ERROR]: Could not connect to database');
    throw err;
  }
});

const redisClient = redis.createClient({
  legacyMode: true,
  url: config.connections.redis.url,
});
redisClient.connect().catch((err) => {
  console.error('[FATAL ERROR]: Could not connect to redis');
  throw err;
});
//#endregion

// #region Express setup
const app = express();

// Statically serve the hosted directory as the assets route and set the favicon
app.use('/assets', express.static(path.resolve(`${__dirname}/../${config.paths.host}`)));
app.use(favicon(`${__dirname}/../${config.paths.host}img/favicon.png`));

// Enable helper modules
app.use(helmet({
  crossOriginEmbedderPolicy: false,
  contentSecurityPolicy: false,
}));
app.use(compression());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cookieParser());

// Setup handlebars
app.engine('handlebars', expressHandleBars.engine({ defaultLayout: '' }));
app.set('view engine', 'handlebars');
app.set('views', `${__dirname}/../views`);

// Setup sessions
app.use(session({
  key: 'sessionid',
  store: new RedisStore({
    client: redisClient,
  }),
  secret: config.secret,
  resave: true,
  saveUninitialized: true,
  cookie: {
    httpOnly: true,
  },
}));
//#endregion

router(app);

app.listen(config.connections.node.port, (err) => {
  if (err) {
    console.error(`[FATAL ERROR]: Could not listen on port ${config.connections.node.port}`);
    throw err;
  }
  console.log(`[SUCCESS]: Listening on port ${config.connections.node.port}`);
});