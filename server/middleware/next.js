const { parse } = require('url');

const handle = require('../nextApp').handle;
const nextApp = require('../nextApp').nextApp;

// Add your own services here.
// If the path is not been added here
// it will be passed to next.js
const feathersServices = {
  '/users': true,
};

const isFeathersService = path => feathersServices[path] === true;

module.exports = function (options = {}) {
  return function next(req, res, next) {
    try {
      return isFeathersService(req.path) ? next() : handle(req, res);
    } catch (error) {
      console.error(error); 
    }
  };
};


module.exports.post = (service) => {
  return async (req, res, next) => {
    try {
      const parsedUrl = parse(req.url, true);
      const { query } = parsedUrl;  
      const { id } = query;
      
      // my route is post so i want to find a post
      const request = await service['post'].get(id);
      return nextApp.render(req, res, '/post', { 
        data: { ...request }
      });
  
    } catch (error) {
      console.error(error); 
      next();
    }
  };
};
