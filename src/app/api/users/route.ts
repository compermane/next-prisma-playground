import prisma from "../../../lib/prisma"

export const GET = async () => {
  const users = await prisma.user.findMany();
  return new Response(JSON.stringify(users), { status: 200 });
}

export const POST = async (req: Request) => {
  const formData = await req.formData()
  const name = formData.get("name") as string;
  const email = formData.get("email") as string;
  const password = formData.get("password") as string;

  try {
    const newUser = await prisma.user.create({
      data: {
        nome: name,
        email: email,
        senha: password
      },
    });
    return new Response(JSON.stringify(newUser), { status: 200 })
  } catch (e: any){
    console.log(e)
    return new Response(e, { status: 500 })
  }
}