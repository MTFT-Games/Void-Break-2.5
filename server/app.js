//#region Imports
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

