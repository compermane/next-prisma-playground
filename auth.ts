import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import prisma from "./src/lib/prisma"
import { User as NextAuthUser } from "next-auth";
import { PrismaAdapter } from "@auth/prisma-adapter";

const authOptions = NextAuth({
  adapter: PrismaAdapter(prisma),
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Senha", type: "password" },
      },
      async authorize(credentials): Promise<NextAuthUser | null> {
        const user = await prisma.user.findUnique({
          where: { email: credentials?.email as string },
        });

        if (user && await credentials?.password === user.senha) {
          return {
            id: user.id.toString(),
            name: user.nome,
            email: user.email
          }
        }

        return null
      },
    }),
  ],
})

export default authOptions