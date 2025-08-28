import { JSX } from "react";

const LoginForm = (): JSX.Element => {
  return (
    <div className="min-w-1/4 bg-white flex flex-col items-center text-black">
      <h1 className="mt-5 mb-5 font-bold text-xl">Login</h1>
      <form>
        <div className="flex flex-col gap-4">
          <div className="flex flex-col">
            <label htmlFor="email">Email </label>
            <input id="email" type="email" placeholder="Digite seu email"/>
          </div>
          <div className="flex flex-col">
            <label htmlFor="name">Nome </label>
            <input id="name" type="text" placeholder="Digite seu nome" />
          </div>
          <div className="flex flex-col">
            <label htmlFor="password">Senha </label>
            <input id="password" type="password" placeholder="Digite sua senha" />
          </div>
        </div>
        <div className="flex flex-row justify-between mt-5 mb-5">
          <button>Login</button>
          <button>Limpar</button>
        </div>
      </form>
    </div>
  )
}

export default LoginForm