/* eslint-disable @typescript-eslint/no-unused-vars */
import { connectDB } from "@/lib/connectDB"; // Corrected the import path to 'connectDB'

export const GET = async (request) => {
    try {
        // Extract email from the URL path
        const { searchParams } = new URL(request.url);
        const email = searchParams.get("email");
        console.log(email)
        // Connect to the database
        const db = await connectDB();
        const userCollection = db?.collection('users');

        // Check if userCollection is available
        if (!userCollection) {
            return new Response(JSON.stringify({ message: "Database connection failed" }), { status: 500 });
        }

        // Fetch user data based on email
        const user = await userCollection.findOne({ email });

        // Handle case where user is not found
        if (!user) {
            return new Response(JSON.stringify({ message: "User  not found" }), { status: 404 });
        }

        // Exclude sensitive data like password before returning the user data
        const { password, ...userData } = user;

        return new Response(JSON.stringify(userData), { status: 200 });
    } catch (error) {
        console.error("Error fetching user:", error); // Added logging for better debugging
        return new Response(JSON.stringify({ message: "Something went wrong", error: error.message }), { status: 500 });
    }
};


export const PUT = async (request) => {
    try {
        const { email, notes } = await request.json(); // Get email and notes from the request body

        // Connect to the database
        const db = await connectDB();
        const userCollection = db.collection('users');

        // Update the user's notes field based on the provided email
        const result = await userCollection.updateOne(
            { email },
            { $set: { notes } }
        );

        if (result.modifiedCount === 0) {
            return new Response(JSON.stringify({ message: "No update performed" }), { status: 404 });
        }

        return new Response(JSON.stringify({ message: "Notes updated successfully" }), { status: 200 });
    } catch (error) {
        console.error("Error updating notes:", error);
        return new Response(JSON.stringify({ message: "Something went wrong", error: error.message }), { status: 500 });
    }
};