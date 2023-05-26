import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";

export default NextAuth({
  providers: [
    GoogleProvider({
      clientId: "Add your client id here",
      clientSecret: "Add your client secret here",
    }),
  ],
  secret: "someSecret",
});
