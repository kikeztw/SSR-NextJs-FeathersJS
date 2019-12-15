// eslint-disable-next-line no-unused-vars
const postView = require('../views/post');
const handleView = require('../views/handle');


module.exports = function (app) {

  // custom root for render next pages
  app.get('/p', postView(app));

  // next sould handle the rest of route
  app.get('*', handleView);
  
}