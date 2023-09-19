import { MongoClient } from "mongodb";
import { DB_URI } from "$env/static/private";

// mongo-db initialization! //

const client = new MongoClient(DB_URI);
await client.connect();
const db = client.db("unimash"); // select database

export default db;

export async function get_all_colleges() {
  return <Promise<College[]>>(<unknown>await db.collection("colleges").find().toArray()); // weird typing in order to type the schema
}

export async function add_college(name: string, image: string) {
  await db.collection("colleges").insertOne(<College>{
    name,
    image,
    rating: 1500, // initial rating
  });
}

export async function update_college_rating(name: string, rating_change: number) {
  const query = { name };
  const update = {
    $inc: {
      rating: rating_change,
    },
  };
  await db.collection("colleges").findOneAndUpdate(query, update);
}
