const app = require('../../server/app');

describe('\'galleries\' service', () => {
  it('registered the service', () => {
    const service = app.service('galleries');
    expect(service).toBeTruthy();
  });
});
