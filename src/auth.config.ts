
import type { NextAuthConfig } from "next-auth"
import credentials from "next-auth/providers/credentials";
import prisma from "./lib/prisma";
import bcrypt from "bcryptjs";
import Google from "next-auth/providers/google";
import { logInSchema } from "./lib/validationSchemas";
import { ZodError } from "zod";
 
// Notice this is only an object, not a full Auth.js instance
export default {
    providers: [
        credentials({
          credentials: {
            email: {},
            password: {},
          },
          authorize: async (credentials) => {
            try {
              const { email, password } = await logInSchema.parseAsync(credentials);
    
              // logic to verify if the user exists
              let user: any = await prisma.user.findUnique({
                where: {
                  email,
                },
              });
    
              if (!user || !user.hashedPassword) {
                return null;
              }
    
              const isMatch = bcrypt.compareSync(
                credentials.password as string,
                user.hashedPassword
              );
    
              if (!isMatch) {
                return null;
              }
    
              return user;
            } catch (error) {
              if (error instanceof ZodError) {
                return null;
              }
              return error;
            }
          },
        }),
        Google({
          clientId: process.env.AUTH_GOOGLE_ID,
          clientSecret: process.env.AUTH_GOOGLE_SECRET,
        }),
      ],
} satisfies NextAuthConfig