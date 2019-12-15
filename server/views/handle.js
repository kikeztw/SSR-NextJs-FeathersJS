const handle = require('../client').handle;

// Add your own services here.
// If the path is not been added here
// it will be passed to next.js
const feathersServices = {
  '/posts': true,
};

const isFeathersService = path => feathersServices[path] === true;

module.exports = function (req, res, next) {
  try {
    return isFeathersService(req.path) ? next() : handle(req, res);
  } catch (error) {
    console.error(error); 
  }
};
