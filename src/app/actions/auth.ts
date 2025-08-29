"use server";

import { signIn } from "@/auth"

const loginUser = async (formData: FormData) => {
  await signIn("credentials", formData)
}

export default loginUser