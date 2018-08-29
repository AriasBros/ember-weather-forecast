'use strict';

const EmberApp = require('ember-cli/lib/broccoli/ember-app');

module.exports = function(defaults) {
  let app = new EmberApp(defaults, {
    sassOptions: {
      includePaths: [
        "node_modules"
      ]
    }
  });

  app.import('node_modules/moment/moment.js');
  app.import('node_modules/moment/locale/es.js');

  app.import('node_modules/should/should.js', {
    using: [
      { transformation: 'amd', as: 'should' }
    ]
  });

  return app.toTree();
};
