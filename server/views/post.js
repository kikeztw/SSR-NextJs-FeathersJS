const { parse } = require('url');

const app = require('../client').app;


module.exports = (server) => {
  return async (req, res, next) => {
    try {
      const parsedUrl = parse(req.url, true);
      const { query } = parsedUrl;  
      const { id } = query;

      if(id){
        const result = await server.service('posts').get(id);
        return app.render(req, res, '/post', { 
          result,
        });
      }

      const result = await server.service('posts').find({});
      return app.render(req, res, '/post', { 
        result,
      });

    } catch (error) {
      console.error(error); 
      return app.render(req, res, './_error');
    }
  };
};
