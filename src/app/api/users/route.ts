import prisma from "../../../lib/prisma"

const GET = async () => {
  const users = await prisma.user.findMany();
  return new Response(JSON.stringify(users), { status: 200 });
}

export default GET