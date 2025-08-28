import { JSX } from "react"

const Header = (): JSX.Element => {
  return (
    <div className="fixed h-26 w-full bg-white" >
      <div className="flex h-full items-center justify-between text-black">
        <h1 className="ml-10">Texto 1</h1>
        <div className="flex justify-center">
          <a href="/login">Login</a>
          <a href="#">&nbsp; Cadastrar</a>
        </div>
        <h1 className="mr-10">Texto 2</h1>
      </div>
    </div>
  )
}

export default Header