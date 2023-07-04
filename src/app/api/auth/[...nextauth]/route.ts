const { default: NextAuth } = require("next-auth/next");
import GoogleProvider from "next-auth/providers/google";

const authOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_SECRET as string,
    }),
  ],
  secret: process.env.NEXT_PUBLIC_SECRET,
  pages:{
    signIn: '/'
  }
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };