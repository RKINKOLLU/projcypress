const cucumber = require('cypress-cucumber-preprocessor').default;
// module.exports = (on, config) => {
//   on('file:preprocessor', cucumber());
// };
const {
  addMatchImageSnapshotPlugin,
} = require('cypress-image-snapshot/plugin');


const _ = require('lodash')
const del = require('del')

module.exports = (on, config) => {
  addMatchImageSnapshotPlugin(on, config);
  on('file:preprocessor', cucumber());
  on('after:spec', (spec, results) => {
    if (results && results.video) {
      // Do we have failures for any retry attempts?
      const failures = _.some(results.tests, (test) => {
        return _.some(test.attempts, { state: 'failed' })
      })
      if (!failures) {
        cy.exec('"C:/Program Files (x86)/Bandicam/bdcam_nonadmin.exe" /stop');
        cy.wait(3000);
        // delete the video if the spec passed and no tests retried
        //return del(results.video);
      }
    }
  })
}
