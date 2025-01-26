import { MongoClient, ServerApiVersion } from "mongodb";

const uri = process.env.ATLAS_URI || "";
const client = new MongoClient(uri, {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true
    }
});

try {
    // Connect to client server
    await client.connect();

    // Send a ping to confirm a successful connection
    await client.db("admin").command({ping:1});
    console.log("You successfully connected to MongoDB");
}
catch(error) {
    console.error(error);
}

let db = client.db("data");

export default db;