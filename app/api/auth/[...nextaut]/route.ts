import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";

// configured google provider through the docs :https://next-auth.js.org/providers/google
const handler = NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),
  ],
});

export { handler as GET, handler as POST };
