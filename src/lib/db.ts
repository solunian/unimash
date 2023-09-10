import { MongoClient } from "mongodb";
import { DB_URI } from '$env/static/private';

// mongo-db initialization! //

const client = new MongoClient(DB_URI);
await client.connect();
export default client.db('unimash'); // select database