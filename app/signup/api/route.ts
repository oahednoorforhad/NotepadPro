import { connectDB } from "@/lib/connectDB"; // Corrected the import path to 'connectDB'
import bcrypt from "bcrypt";
export const POST = async (request) => {
    const newUser = await request.json();

    try {
        const db = await connectDB();
        const userCollection = db?.collection('users');

        // Check if user already exists
        const exist = await userCollection?.findOne({ username: newUser.username });
        if (exist) {
            return Response.json({ message: "User exists" }, { status: 304 });
        }
        const hashedPassword = bcrypt.hashSync(newUser.password, 14);
        // Insert new user if they do not exist
        const resp = await userCollection?.insertOne({...newUser, password: hashedPassword});
        console.log(resp);

        return Response.json({ message: "User created" }, { status: 201 }); // Changed status to 201 for created resource
    } catch (error) {
        console.error("Error during user creation:", error); // Added logging for better debugging
        return Response.json({ message: "Something went wrong", error: error.message }, { status: 500 }); // Return error message
    }
};
