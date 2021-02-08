//Imports
var express = require('express');
const morgan = require('morgan')
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const graphQlSchema = require('./Schema/index');
const graphQlResolvers = require('./resolver/index');
const {graphqlHTTP} = require('express-graphql');
const cors = require('cors')

//.env
dotenv.config();

//database connection
mongoose.connect(process.env.DB_CONNECT,{
    useNewUrlParser:true,
    useCreateIndex:true,
    useUnifiedTopology:true
 
})
    .then(()=>console.log('Mongo DB connection done successfully'))
    .catch((err)=>console.log('Error',err))

 
var app = express();
app.use(morgan('dev'))
app.use(cors())
app.use('/graphql', graphqlHTTP({
  schema: graphQlSchema,
  rootValue: graphQlResolvers,
  graphiql: true,
}));
app.listen(process.env.PORT);
console.log('Running a GraphQL API server at http://localhost:4000/graphql');