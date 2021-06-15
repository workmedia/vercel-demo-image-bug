// IT'S NECESSARY TO INSTALL THIS DEPENDENCY TO USE HTTPS ON LOCALHOST:
// sudo apt install libnss3-tools
// eslint-disable-next-line import/no-unresolved
const https = require('https-localhost');
const next = require('next');

const app = next({ dev: true, dir: './src' });
const handle = app.getRequestHandler();
const port = process.env.PORT || 3000;

app
  .prepare()
  .then(() => {
    const server = https();
    server.all('*', handle);
    server.listen(port);
  })
  .catch((err) => {
    console.log('Error:::::', err);
  });
