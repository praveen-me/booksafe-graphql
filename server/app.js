const express = require('express');
const graphqlHTTP = require('express-graphql');

const app = express();

// Middleware for graphQl
app.use('/graphql', graphqlHTTP({

}));

app.get('/', (req, res) => {
  res.send('server is running');
});

app.listen(4001, () => {
  console.log('Server is running on http://localhost:4001');
});
