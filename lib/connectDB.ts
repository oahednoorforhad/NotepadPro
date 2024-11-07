import { Db, MongoClient, ServerApiVersion } from "mongodb";

let db: Db;
export const connectDB = async () => {
  const uri = process.env.NEXT_PUBLIC_MONGODB_URI;
  if (db) return db;
  try {
    const client = new MongoClient(uri, {
      serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
      },
    });
    db = client.db("userDB");
    return db;
  } catch (error) {
    console.log(error);
  }
};
