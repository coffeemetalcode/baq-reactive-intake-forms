const app = require('./app/app');

const PORT = process.env.PORT || 8085;

app.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log('Server open and listening on port', PORT);
});
