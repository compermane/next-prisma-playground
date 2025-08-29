"use server"

import prisma from "@/lib/prisma"
import ProfileCard from "@/components/ProfileCard"

interface ProfilePageParams {
  params: {
    id: string
  }
}

const ProfilePage = async ({
  params
}: ProfilePageParams) => {
  const { id } = params
  const user = await prisma.user.findUnique({
    where: {
      id: parseInt(id)
    },
  }) 

  if (!user) {
    return (
      <div>Usuário não encontrado</div>
    )
  }

  return (
    <ProfileCard user={user} />
  )
}

export default ProfilePage