/* eslint-disable no-console */
const logger = require('./logger');
const server = require('./app');
const hostname = server.get('host');
const port = server.get('port');
const listen = server.listen(port, hostname);
const app = require('./client').app;


app.prepare().then(() => { 
  
  process.on('unhandledRejection', (reason, p) =>
    logger.error('Unhandled Rejection at: Promise ', p, reason)
  );

  listen.on('listening', () =>
    logger.info('Feathers application started on http://%s:%d', hostname, port)
  );

});

