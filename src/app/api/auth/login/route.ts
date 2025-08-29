import { NextResponse } from "next/server"

const POST = async (req: Request) => {
  const { email, password } = await req.json()
  const user = await prisma?.user.findUnique({
    where: {
      email
    }
  })

  if (!user || user.senha != password) {
    return NextResponse.json({ error: "Credenciais Inválidas" }, { status: 401 })
  }

  return NextResponse.json({ message: "Login bem sucedido" })
}

export default POST