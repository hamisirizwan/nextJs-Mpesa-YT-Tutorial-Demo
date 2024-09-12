"use server"

import { signOut } from "@/auth"
import { revalidatePath } from "next/cache"

export const logOut = async () =>{
    try {
      await signOut()
      revalidatePath("/")
    } catch (error) {
      throw error; 
    }
}
