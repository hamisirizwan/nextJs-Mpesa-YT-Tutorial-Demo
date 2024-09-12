import NextAuth ,{type DefaultSession}  from "next-auth";
import { PrismaAdapter } from "@auth/prisma-adapter";
import prisma from "./lib/prisma";

import authConfig from "./auth.config";


type ExtendedUser = DefaultSession["user"] & {
  credits : null | number
}

declare module "next-auth" {
  interface Session {
    user : ExtendedUser
  }
}

export const { handlers, signIn, signOut, auth } = NextAuth({
  adapter: PrismaAdapter(prisma),
  session: { strategy: "jwt" },
  pages: {
    signIn: "/login",
    error: "/auth-error",
  },
  events: {
    async linkAccount({ user }) {
      await prisma.user.update({
        where: {
          id: user.id,
        },
        data: {
          emailVerified: new Date(),
        },
      });
    },
  },
  callbacks: {
    async session({ token, session }) {
      if (token.sub && session.user) {
        session.user.id = token.sub;
      }
        session.user.credits = token.credits as null | number 
      
      return session;
    },
    async jwt({ token }) {

      if(!token.sub) return token;

              //get user by id

              const dbUser = await prisma.user.findUnique({
                where:{
                  id:token.sub
                }
              })
      
              
              if(!dbUser){
               return token
              }

              token.credits = dbUser.credits || 0
             
      return token;
    },
  },
  ...authConfig
});
