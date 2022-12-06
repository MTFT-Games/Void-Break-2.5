require('dotenv').config();
const randomstring = require('randomstring');

// Check env var to see if we are running in prod. If the env var is absent presume dev
const mode = process.env.NODE_ENV || 'dev';

// Prioritize using a specified host dir, otherwise use hosted or hostedDev depending on mode
const hostDir = process.env.HOST_DIR || mode === 'prod' ? 'hosted/' : 'hostedDev/';

// Use a specified port or fallback to 3000
const nodePort = process.env.PORT || process.env.NODE_PORT || 3000;

// Use specified mongo uri or fallback to a locally hosted db of the project name
const mongoUri = process.env.MONGO_URI || 'mongodb://localhost/VoidBreak';

// Use specified redis url with no fallback TODO: add fallback
const redisUrl = process.env.REDIS_URL;

// Use a given secret key or generate one
const secret = process.env.SECRET || randomstring.generate();

module.exports = {
  mode,
  paths: { host: hostDir },
  connections: {
    node: { port: nodePort },
    mongo: { uri: mongoUri },
    redis: { url: redisUrl },
  },
  secret,
};