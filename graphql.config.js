require('dotenv').config();
const fs = require('fs');

const filePath = './.schema.graphql';
const schema = fs.existsSync(filePath) ? filePath : process.env.NEXT_PUBLIC_RELAY_ENDPOINT;

const headers = {
  Authorization: `Bearer ${process.env.JWT_TOKEN}`,
  'Content-Type': 'application/json'
};

module.exports = {
  schema: { [schema]: { headers } },
  extensions: {
    codegen: {
      generates: {
        [filePath]: {
          plugins: ['schema-ast']
        }
      }
    }
  }
};
