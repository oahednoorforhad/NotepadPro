import { Db, MongoClient, ServerApiVersion } from "mongodb";

let db: Db;
export const connectDB = async () => {
    const uri = "mongodb+srv://oahednoorforhad:VvuNefKJPm8HZXBQ@cluster0.3l1pq.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
    if (db) return db;
    try {
        const client = new MongoClient(uri, {
            serverApi: {
                version: ServerApiVersion.v1,
                strict: true,
                deprecationErrors: true,
            },
        });
        db = client.db("userDB")
        console.log(process.env.NEXT_PUBLIC_MONGODB_URI)
        return db;
        } catch (error) {
            console.log(error)
        }
    }