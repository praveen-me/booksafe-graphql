const express = require('express');
const graphqlHTTP = require('express-graphql');
const mongoose = require('mongoose');
const cors = require('cors');
const schema = require('./schema/schema');

const app = express();

// Connecting to mongodb
mongoose.connect('mongodb://localhost/booksafe', { useNewUrlParser: true }, (err) => {
  if (err) throw err;
  console.log('connecting to mongodb');
});

// Essential Middlewares
app.use(cors());

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
