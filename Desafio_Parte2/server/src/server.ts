import express from 'express';

const app = express();

app.get('/', (request, response) => {
  console.log("Hello World!");

  response.json([
    'op1',
    'op2',
    'op3'
  ]);
});

app.listen(3333);