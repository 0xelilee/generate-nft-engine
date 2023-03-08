const basePath = process.cwd();
const { startCreating, buildSetup } = require(`${basePath}/src/app.js`);

(() => {
  buildSetup();
  startCreating();
})();
