import { JSX } from "react"

const Header = (): JSX.Element => {
  return (
    <div className="fixed h-26 w-full bg-white" >
      <div className="flex h-full items-center justify-between text-black">
        <a href="/" className="ml-10">Home</a>
        <div className="flex justify-center">
          <a href="/login">Login</a>
          <a href="/signin">&nbsp; Cadastrar</a>
        </div>
        <h1 className="mr-10">Texto 2</h1>
      </div>
    </div>
  )
}

export default Header