import { MongoClient } from 'mongodb'

async function handler(req,res) {
    if(req.method=="POST"){
        const body=req.body
        // const {name,email,password}= body
        
        const client=await  MongoClient.connect("mongodb+srv://stooormix:1zq3anFiFK2ZvnNs@stormdb.tzfn6ua.mongodb.net/journal?retryWrites=true&w=majority") // DATA BASE NAME
        const db= client.db()

        const journals = db.collection("journal")

        const result = await journals.insertOne(body)

        console.log('result :>> ', result);

        // setTimeout(() => {
          await  client.close()
        // }, 2000);

        res.status(201).json({
            message:"created!"
        })
        
    
    }
}

export default handler


// const { MongoClient, ServerApiVersion } = require('mongodb');
// const uri = "mongodb+srv://stooormix:ZpM19zo74aGWg1DP@psmdb.jgkdvf7.mongodb.net/?retryWrites=true&w=majority";

// // Create a MongoClient with a MongoClientOptions object to set the Stable API version
// const client = new MongoClient(uri, {
//   serverApi: {
//     version: ServerApiVersion.v1,
//     strict: true,
//     deprecationErrors: true,
//   }
// });

// async function run() {
//   try {
//     // Connect the client to the server	(optional starting in v4.7)
//     await client.connect();
//     // Send a ping to confirm a successful connection
//     await client.db("admin").command({ ping: 1 });
//     console.log("Pinged your deployment. You successfully connected to MongoDB!");
//   } finally {
//     // Ensures that the client will close when you finish/error
//     await client.close();
//   }
// }
// run().catch(console.dir);
