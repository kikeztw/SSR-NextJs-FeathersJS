const next = require('next');

const dev = process.env.NODE_ENV !== 'production';
const app = next({ dir: './client', dev });
const handle = app.getRequestHandler();

module.exports = {
  app,
  handle
};