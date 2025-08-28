"use client";

import { JSX, useCallback, useState } from "react";
import { POST } from "app/api/users/route"
const SigninForm = (): JSX.Element => {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const handleSetName = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value)
  }, [])

  const handleSetEmail = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value)
  }, [])

  const handleSetPassword = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value)
  }, [])

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>): Promise<void> => {
    e.preventDefault()
    const formData = new FormData(e.currentTarget)
    console.log("BRUH: ", formData.entries)
    await fetch("/api/users", {  method: "POST", body: formData })
  }

  return (
    <div className="min-w-1/4 bg-white flex flex-col items-center text-black">
      <h1 className="mt-5 mb-5 font-bold text-xl">Cadastro</h1>
      <form onSubmit={handleSubmit}>
        <div className="flex flex-col gap-4">
          <div className="flex flex-col">
            <label htmlFor="email">Email </label>
            <input 
              name="email"
              value={email}
              onChange={handleSetEmail}
              id="email" 
              type="email" 
              placeholder="Digite seu email"
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="name">Nome </label>
            <input 
              name="name"
              value={name}
              onChange={handleSetName}
              id="name" 
              type="text" 
              placeholder="Digite seu nome" 
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="password">Senha </label>
            <input 
              name="password"
              value={password}
              onChange={handleSetPassword}
              id="password" 
              type="password" 
              placeholder="Digite sua senha" 
            />
          </div>
        </div>
        <div className="flex flex-row justify-between mt-5 mb-5">
          <button type="submit">Cadastrar</button>
          <button>Limpar</button>
        </div>
      </form>
    </div>
  )
}

export default SigninForm