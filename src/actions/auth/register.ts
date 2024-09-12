"use server";
import { signIn } from "@/auth";
import prisma from "@/lib/prisma";
import { logInSchema } from "@/lib/validationSchemas";
import { saltAndHashPassword } from "@/utils/hashPassword";
import { AuthError } from "next-auth";

export const credentialsRegister = async (formData: {
  email: string;
  password: string;
}) => {
  try {
    const { email, password } = await logInSchema.parseAsync(formData);

    let user: any = await prisma.user.findUnique({
      where: {
        email: email,
      },
    });

    if (user) {
      return { error: `User with email ${formData.email} already exists` };
    }

    //create the user
    const pwHash = saltAndHashPassword(password);
    await prisma.user.create({
      data: {
        email,
        hashedPassword: pwHash,
      },
    });

    //log them in
    await signIn("credentials", {
      ...formData,
      redirectTo: "/account/dashboard",
    });
  } catch (error) {
    if (error instanceof AuthError) {
      switch (error.type) {
        case "CredentialsSignin":
          return { error: "Invalid email or password!" };
        default:
          return { error: "Something went wrong!" };
      }
    }

    throw error;
  }
};
