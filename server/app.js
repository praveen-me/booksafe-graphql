const express = require('express');
const graphqlHTTP = require('express-graphql');
const schema = require('./schema/schema');

const app = express();

// Middleware for graphQl
app.use('/graphql', graphqlHTTP({
  schema,
  graphiql: true,
}));

app.get('/', (req, res) => {
  res.send('server is running');
});

app.listen(4001, () => {
  console.log('Server is running on http://localhost:4001');
});
