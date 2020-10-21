const app = require('./src/app');

app.listen(process.env.PORT || 3000, () => {
  console.log(`Running port ${process.env.PORT}`);
});
