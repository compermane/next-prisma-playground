import { JSX } from "react";

interface ProfileCardProps {
  user: User
}

const ProfileCard = ({
  user
}: ProfileCardProps): JSX.Element => {
  return (
    <div className="flex flex-col w-100 h-50 bg-white text-black items-center justify-between">
      <div>
        <div className="flex flex-row">
          <h1 className="font-bold">Nome: </h1>
          <h1>&nbsp;{user.nome}</h1>
        </div>
        <div className="flex flex-row">
          <h1 className="font-bold">Email: </h1>
          <h1>&nbsp;{user.email}</h1>
        </div>
        <div className="flex flex-row">
          <h1 className="font-bold">Senha: </h1>
          <h1>&nbsp;{user.senha}</h1>
        </div>
      </div>
      <div className="flex flex-row">
        <button>Apagar</button>
        <button>Editar</button>
      </div>
    </div>
  )
}

export default ProfileCard