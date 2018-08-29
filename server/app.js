const app = require('express')();
const graphqlHTTP = require('express-graphql');
const schema = require('./schema/schema');
const mongoose = require('mongoose');
const cors = require('cors');

app.use(cors());
mongoose.connect('mongodb://localhost/graphql')
mongoose.connection.once('open', () => {
  console.log('Connected to database!!');
})

app.use('/graphql', graphqlHTTP({
  schema,
  graphiql: true
}))

app.listen(5000, function() {
  //this callback function will get fired when our server starts up.
  console.log('Listening on port 3000!');
});