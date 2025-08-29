import { signIn } from "next-auth/react";
import { JSX, useCallback, useState } from "react";

const LoginForm = (): JSX.Element => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const handleSetEmail = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value)
  }, [])

  const handleSetPassword = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value)
  }, [])

  const handleSubmit = useCallback(async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const formData = new FormData(e.currentTarget)
    const email = formData.get("email")
    const password = formData.get("password")

    await signIn("credentials", { email, password, redirect: false, callbackUrl: "/" })
  }, [])

  return (
    <div className="min-w-1/4 bg-white flex flex-col items-center text-black">
      <h1 className="mt-5 mb-5 font-bold text-xl">Login</h1>
      <form onSubmit={handleSubmit}>
        <div className="flex flex-col gap-4">
          <div className="flex flex-col">
            <label htmlFor="email">Email </label>
            <input 
              value={email}
              onChange={handleSetEmail}
              id="email" 
              type="email" 
              placeholder="Digite seu email"
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="password">Senha </label>
            <input 
              value={password}
              onChange={handleSetPassword}
              id="password" 
              type="password" 
              placeholder="Digite sua senha" 
            />
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