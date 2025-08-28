import { JSX } from "react";

interface CardProps {
  name: string,
  email: string
}

const Card = ({
  name,
  email
}: CardProps): JSX.Element => {
  return(
    <div className="h-20 w-120 bg-white text-black mt-10">
      <div className="h-full flex justify-between">
        <div className="ml-5 flex flex-col items-center justify-center">
          <h1>Nome: </h1>
          <h1>{name}</h1>
        </div>
        <div className="mr-5 flex flex-col items-center justify-center ">
          <h1>Email: </h1>
          <h1>{email}</h1>
        </div>
      </div>
    </div>
  )
}

export default Card