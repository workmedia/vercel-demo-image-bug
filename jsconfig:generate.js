require('dotenv').config();

const { writeFileSync } = require('fs');

const jsConfig = {
  compilerOptions: {
    baseUrl: './src',
    paths: {
      '*': [`themes/${process.env.THEME}/*`, '*'],
      'base/*': ['*']
    }
  }
};
const jsConfigJSON = JSON.stringify(jsConfig, null, 2);

writeFileSync('jsconfig.json', jsConfigJSON);
