import { MongoClient } from "mongodb";
import { DB_URI } from "$env/static/private";

// mongo-db initialization! //

const client = new MongoClient(DB_URI);
await client.connect();
const db = client.db("unimash"); // select database

export default db;

export async function get_all_colleges() {
  return await db.collection("colleges").find().toArray();
}

export function add_college(name: string, image: string) {
  db.collection("colleges").insertOne({
    name,
    image,
    rating: 1500,
  });
}
