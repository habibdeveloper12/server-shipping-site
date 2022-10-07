const express = require('express')
const app = express();
const port = process.env.PORT || 5000;
const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');
require('dotenv').config();
const jwt = require('jsonwebtoken');
const cors = require('cors')


/* ============= start middleware =============== */

app.use(cors())
app.use(express.json())


/* ============= start Connection =============== */

const uri = "mongodb+srv://sun:B4uKU1myilIxmSA1@cluster0.vrdjndt.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });




async function run() {
    try {
        client.connect()
       
      } finally {
        //   await client.close();
    }
}
run().catch(console.dir);
app.get('/', (req, res) => {
  res.send('Hello World, How are you')
})
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})