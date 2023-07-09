import { NextAuthOptions } from "next-auth"
import EmailProvider from "next-auth/providers/email"
import GitHubProvider from "next-auth/providers/github"


export const authOptions: NextAuthOptions = {
  session: {
    strategy: "jwt",
  },
  pages: {
    signIn: "/login",
    error: '/auth/error',
  },
  providers: [
    GitHubProvider({
      clientId: process.env.NEXTAUTH_GITHUB_CLIENT_ID as string,
      clientSecret: process.env.NEXTAUTH_GITHUB_CLIENT_SECRET as string,
    }),
  ],
  callbacks: {
      async signIn({ user, account, profile, email, credentials }) {
        console.log('signIn \n', {user, account, profile, email, credentials});
        
        return true
      },
      async redirect({ url, baseUrl }) {
        console.log('redirect \n', {url, baseUrl});
        return baseUrl
      },
      async session({ session, user, token }) {
        console.log('session \n', {session, user, token});
        return session
      },
      async jwt({ token, user, account, profile, isNewUser }) {
        console.log('jwt \n', {token, user, account, profile, isNewUser});
        return token
      }
  },
}
