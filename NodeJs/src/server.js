const express = require('express')
const mongoose= require( 'mongoose')

const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://HuyLee:<04122002>@cluster0.tky4bi0.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
client.connect(err => {
  const collection = client.db("dbUserManagerPolyDN").collection("devices");
  // perform actions on the collection object
  client.close();
});

const app =express();
app.use(express.json);
app.listen(3000,()=> {console.log('server is running')

})
mongoose.connect(url,{useUnifiedTopology:true,useNewUrlParser:true})
