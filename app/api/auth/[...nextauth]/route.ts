/* eslint-disable @typescript-eslint/no-unused-vars */
import NextAuth from "next-auth/next";
import CredentialProvider from "next-auth/providers/credentials";

const handler = NextAuth({
  session: {
    strategy: "jwt",
    maxAge: 30 * 24 * 60 * 60,
  },
  providers: [
    CredentialProvider({
      credentials: {
        username: {},
        password: {},
      },
      async authorize(credentials) {
        return true;
      },
    }),
  ],
  //debug: true,
  callbacks: {},
  pages: {
    signIn: "/login",
  },
});

export { handler as Get, handler as POST };
