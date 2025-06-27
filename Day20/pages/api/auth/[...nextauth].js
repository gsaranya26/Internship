import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

export default NextAuth({
  providers: [
    CredentialsProvider({
      // Simple mock credentials validation
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" }
      },
      async authorize(credentials) {
        if (
          credentials.email === "test@example.com" &&
          credentials.password === "password123"
        ) {
          return { id: 1, name: "Test User", email: credentials.email };
        }
        return null;
      }
    })
  ],
  session: { strategy: "jwt" }
});